// Copyright 2018 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

let changeColor = document.getElementById('changeColor');
chrome.storage.sync.get('color', function(data) {
  changeColor.style.backgroundColor = data.color;
  changeColor.setAttribute('value', data.color);
});

changeColor.onclick = function(element) {
  let color = element.target.value;
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    chrome.tabs.executeScript(
        tabs[0].id,
        {code: 'document.body.style.backgroundColor = "' + color + '";'});
  });
};

let unirest = require('unirest');


unirest.get("https://matchilling-chuck-norris-jokes-v1.p.rapidapi.com/jokes/random")
.header("X-RapidAPI-Host", "matchilling-chuck-norris-jokes-v1.p.rapidapi.com")
.header("X-RapidAPI-Key", "e2d7137386mshc3d621b0db1afefp1aa8bajsna8975bcc80d1")
.header("accept", "application/json")
.end(function (result) {
  console.log(result.status, result.headers, result.body);
});
