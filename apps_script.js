var WORKOUT_SHEET = 'Workout Log';
var STRENGTH_SHEET = 'Strength Log';
var NUTRITION_SHEET = 'Nutrition';
var STEPS_SHEET = 'Steps and Cardio';

function doPost(e) {
  try {
    var data = JSON.parse(e.postData.contents);
    var action = data.action;
    var payload = data.payload;
    var result;

    if (action === 'logWorkout') {
      result = logWorkout(payload);
    } else if (action === 'logStrength') {
      result = logStrength(payload);
    } else if (action === 'logNutrition') {
      result = logNutrition(payload);
    } else if (action === 'logSteps') {
      result = logSteps(payload);
    } else if (action === 'getDashboard') {
      result = getDashboard();
    } else {
      result = { error: 'Unknown action' };
    }

    return ContentService
      .createTextOutput(JSON.stringify({ success: true, data: result }))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (err) {
    return ContentService
      .createTextOutput(JSON.stringify({ success: false, error: err.message }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

function doGet(e) {
  var action = e.parameter.action || 'getDashboard';
  var result;

  if (action === 'getDashboard') {
    result = getDashboard();
  } else if (action === 'getHistory') {
    result = getHistory(e.parameter.type);
  } else {
    result = { error: 'Unknown action' };
  }

  return ContentService
    .createTextOutput(JSON.stringify({ success: true, data: result }))
    .setMimeType(ContentService.MimeType.JSON);
}

function getOrCreateSheet(name, headers) {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getSheetByName(name);
  if (!sheet) {
    sheet = ss.insertSheet(name);
    sheet.getRange(1, 1, 1, headers.length).setValues([headers]);
    sheet.getRange(1, 1, 1, headers.length)
      .setBackground('#1A1A2E')
      .setFontColor('#FFFFFF')
      .setFontWeight('bold');
    sheet.setFrozenRows(1);
  }
  return sheet;
}

function logWorkout(p) {
  var headers = [
    'Session', 'Date', 'Body Weight kg', 'Workout Type',
    'Notes', 'Duration min', 'Intensity', 'Boxing Rounds',
    'Boxing Done', 'Cardio Type', 'Cardio Duration min',
    'Cardio Done', 'Steps', 'Steps Goal Met'
  ];

  var sheet = getOrCreateSheet(WORKOUT_SHEET, headers);
  var sessionNum = sheet.getLastRow();
  var stepsGoal = (parseInt(p.steps) || 0) >= 10000 ? 'YES' : 'NO';

  var row = [
    sessionNum, p.date, p.bodyWeight, p.workoutType,
    p.notes || '', p.duration || 60, p.intensity || 8,
    p.boxingRounds || 5, p.boxingDone || 'Yes',
    p.cardioType || 'Stairmaster', p.cardioDuration || 17,
    p.cardioDone || 'Yes', p.steps || 0, stepsGoal
  ];

  sheet.getRange(sheet.getLastRow() + 1, 1, 1, row.length).setValues([row]);
  return { message: 'Workout logged', session: sessionNum };
}

function logStrength(p) {
  var headers = [
    'Session', 'Date', 'Exercise', 'Weight kg', 'Reps',
    'Set', 'Workout Type', '1RM Estimate', 'Best Ever'
  ];

  var sheet = getOrCreateSheet(STRENGTH_SHEET, headers);

  var allData = [];
  if (sheet.getLastRow() > 1) {
    allData = sheet.getRange(2, 1, sheet.getLastRow() - 1, 9).getValues();
  }

  var sets = p.sets;
  var sessionNum = p.sessionNum || 1;

  for (var i = 0; i < sets.length; i++) {
    var s = sets[i];
    var weight = parseFloat(s.weight) || 0;
    var reps = parseInt(s.reps) || 0;
    var oneRM = Math.round(weight * (1 + reps / 30) * 10) / 10;

    var prevBest = 0;
    for (var j = 0; j < allData.length; j++) {
      if (allData[j][2] === s.exercise) {
        var w = parseFloat(allData[j][3]) || 0;
        if (w > prevBest) prevBest = w;
      }
    }

    var isBest = weight >= prevBest ? 'BEST' : '-';

    var row = [
      sessionNum, p.date, s.exercise, weight, reps,
      s.setNum, s.workoutType, oneRM, isBest
    ];

    var newRow = sheet.getLastRow() + 1;
    sheet.getRange(newRow, 1, 1, row.length).setValues([row]);

    if (isBest === 'BEST') {
      sheet.getRange(newRow, 9)
        .setBackground('#FFEB9C')
        .setFontColor('#9C5700')
        .setFontWeight('bold');
    }
  }

  return { message: sets.length + ' sets logged' };
}

function logNutrition(p) {
  var headers = [
    'Day', 'Date', 'Day Name', 'Calories', 'Protein g',
    'Carbs g', 'Fat g', 'Water L', 'Calorie Goal Met', 'Protein Goal Met'
  ];

  var sheet = getOrCreateSheet(NUTRITION_SHEET, headers);
  var dayNum = sheet.getLastRow();

  var dateObj = new Date(p.date);
  var days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
  var dayName = days[dateObj.getDay()];

  var calGoal = (parseInt(p.calories) || 0) >= 2300 ? 'YES' : 'NO';
  var proteinGoal = (parseInt(p.protein) || 0) >= 150 ? 'YES' : 'NO';

  var row = [
    dayNum, p.date, dayName,
    p.calories || 0, p.protein || 0,
    p.carbs || 0, p.fat || 0, p.water || 0,
    calGoal, proteinGoal
  ];

  var newRow = sheet.getLastRow() + 1;
  sheet.getRange(newRow, 1, 1, row.length).setValues([row]);

  var calColor = calGoal === 'YES' ? '#C6EFCE' : '#FFC7CE';
  var calFont = calGoal === 'YES' ? '#006100' : '#9C0006';
  var protColor = proteinGoal === 'YES' ? '#C6EFCE' : '#FFC7CE';
  var protFont = proteinGoal === 'YES' ? '#006100' : '#9C0006';

  sheet.getRange(newRow, 9).setBackground(calColor).setFontColor(calFont);
  sheet.getRange(newRow, 10).setBackground(protColor).setFontColor(protFont);

  return { message: 'Nutrition logged', calGoal: calGoal, proteinGoal: proteinGoal };
}

function logSteps(p) {
  var headers = [
    'Day', 'Date', 'Steps', 'Goal Met',
    'Stairmaster min', 'Boxing Rounds', 'Other Cardio', 'Notes'
  ];

  var sheet = getOrCreateSheet(STEPS_SHEET, headers);
  var dayNum = sheet.getLastRow();
  var stepsGoal = (parseInt(p.steps) || 0) >= 10000 ? 'YES' : 'NO';

  var row = [
    dayNum, p.date, p.steps || 0, stepsGoal,
    p.stairmaster || 0, p.boxing || 0,
    p.otherCardio || '', p.notes || ''
  ];

  var newRow = sheet.getLastRow() + 1;
  sheet.getRange(newRow, 1, 1, row.length).setValues([row]);

  var color = stepsGoal === 'YES' ? '#C6EFCE' : '#FFC7CE';
  var font = stepsGoal === 'YES' ? '#006100' : '#9C0006';
  sheet.getRange(newRow, 4).setBackground(color).setFontColor(font);

  return { message: 'Steps logged', stepsGoal: stepsGoal };
}

function getDashboard() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var result = {};

  var wSheet = ss.getSheetByName(WORKOUT_SHEET);
  if (wSheet && wSheet.getLastRow() > 1) {
    var wData = wSheet.getRange(2, 1, wSheet.getLastRow() - 1, 3).getValues();
    result.latestWeight = wData[wData.length - 1][2];
    result.totalWorkouts = wData.length;

    var today = new Date();
    var weekStart = new Date(today);
    weekStart.setDate(today.getDate() - today.getDay() + 1);
    weekStart.setHours(0, 0, 0, 0);

    var weekCount = 0;
    for (var i = 0; i < wData.length; i++) {
      var d = new Date(wData[i][1]);
      if (d >= weekStart && d <= today) weekCount++;
    }
    result.weekWorkouts = weekCount;
  }

  var nSheet = ss.getSheetByName(NUTRITION_SHEET);
  if (nSheet && nSheet.getLastRow() > 1) {
    var nData = nSheet.getRange(2, 1, nSheet.getLastRow() - 1, 5).getValues();
    var today2 = new Date();
    var weekStart2 = new Date(today2);
    weekStart2.setDate(today2.getDate() - today2.getDay() + 1);
    weekStart2.setHours(0, 0, 0, 0);

    var weekNut = [];
    for (var i = 0; i < nData.length; i++) {
      var d2 = new Date(nData[i][1]);
      if (d2 >= weekStart2 && d2 <= today2) weekNut.push(nData[i]);
    }

    if (weekNut.length > 0) {
      var totalCal = 0;
      var totalProt = 0;
      for (var i = 0; i < weekNut.length; i++) {
        totalCal += weekNut[i][3] || 0;
        totalProt += weekNut[i][4] || 0;
      }
      result.avgCalories = Math.round(totalCal / weekNut.length);
      result.avgProtein = Math.round(totalProt / weekNut.length);
    }
  }

  var sSheet = ss.getSheetByName(STEPS_SHEET);
  if (sSheet && sSheet.getLastRow() > 1) {
    var sData = sSheet.getRange(2, 1, sSheet.getLastRow() - 1, 3).getValues();
    result.latestSteps = sData[sData.length - 1][2];
  }

  var strSheet = ss.getSheetByName(STRENGTH_SHEET);
  if (strSheet && strSheet.getLastRow() > 1) {
    var strData = strSheet.getRange(2, 1, strSheet.getLastRow() - 1, 9).getValues();
    var bestLifts = {};
    for (var i = 0; i < strData.length; i++) {
      var ex = strData[i][2];
      var wt = parseFloat(strData[i][3]) || 0;
      if (!bestLifts[ex] || wt > bestLifts[ex]) {
        bestLifts[ex] = wt;
      }
    }
    result.bestLifts = bestLifts;
  }

  var workouts = result.weekWorkouts || 0;
  var protein = result.avgProtein || 0;
  result.onTrack = (workouts >= 4 && protein >= 150) ? 'ON TRACK' : 'PUSH MORE';

  return result;
}

function getHistory(type) {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheetName;

  if (type === 'strength') {
    sheetName = STRENGTH_SHEET;
  } else if (type === 'nutrition') {
    sheetName = NUTRITION_SHEET;
  } else if (type === 'steps') {
    sheetName = STEPS_SHEET;
  } else {
    sheetName = WORKOUT_SHEET;
  }

  var sheet = ss.getSheetByName(sheetName);
  if (!sheet || sheet.getLastRow() < 2) return [];

  var headers = sheet.getRange(1, 1, 1, sheet.getLastColumn()).getValues()[0];
  var data = sheet.getRange(2, 1, sheet.getLastRow() - 1, sheet.getLastColumn()).getValues();

  var result = [];
  var startIdx = Math.max(0, data.length - 30);
  for (var i = startIdx; i < data.length; i++) {
    var obj = {};
    for (var j = 0; j < headers.length; j++) {
      obj[headers[j]] = data[i][j];
    }
    result.push(obj);
  }

  return result;
}
