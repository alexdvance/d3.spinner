d3.spinner
==========

![wheels screenshot](https://alexdvance.github.io/d3.spinner/examples/img/screenshot.png)

Spin the wheel.

Can create Wheel of Fortune spinners (whole wheel spins) or Twister spinners (center spinner spins).

A random number generator will determine which slice of the spinner is selected.

Dependencies:
-------------------------
http://d3js.org/d3.v3.zip


How to use:
------------------------
**Construct a new Wheel**

    var foo = new Spinner(element, configObj);

element is the DOM node to attach the wheel to. Required.
configObj is optional.
The text on the pie slices is initialized via this object {configObj.data}
using a simple array.


**Spin the Wheel**

call the .spin method.

    foo.spin();

spin() takes two optional parameters (in case you need to rig it).
degrees, and duration (in ms)
return value is an object containing two properties:
duration - how long the wheel will spin
selection - which item the pointer will be pointing at


**Update the wheel**

call the .update(newData) method

    foo.update(["hi", "hello", "hey"]);

provide new values as an array


That's pretty much it, ezpz.

-------------------------------
Here is a working example. The wheel spins, you can add items to it, and you can save the list to the server.

http://alexdvance.com/projects/d3-spinner/examples/spinner.html
