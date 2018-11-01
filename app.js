 var x = new XMLHttpRequest();
  x.open('GET', 'https://s3.amazonaws.com');
  x.onload = x.onerror = function () {
    console.log(x.responseText)
    var xml = new XMLParser().parseFromString(x.responseText);    
    console.log(xml)
    printResult(parseListObjects(xml));
  }
   x.send(options.data);
