# Task #1 : T-Mobile Coding Challenge

# 1. What is done well?
  - Project compoent and mudule strucute well
  - Nice way to Handel child component
  -	Application data management done well. Very nice way to write action and reducer pattern
  - Set up test cases for component modules


# 2. What would you change?
  -	 Here we are using apiKeys for stock data. Instead of enviroment varible , save secure way (e.g get all secret from secret           manager ot other tool).
  -	 Google chart not diplaying when you get data from network. I have to Fix binding
  -	  Deafult value of cahrt pass as a input data in component. In case in future if any user requuirement to update chart type of      size then we can make some selection type and pass it to chart component.
  - There is multiple request going on network. For example if you fill some data and click button  and after some time again click on
     go button without any change on form, there is same request on network side. This issue better way to resolve  by cache/memoieze mechanism.
  -   All the cosnt values save to the separate file 
  - Disable Go button if form is invalid.


# 3. Are there any code smells or problematic implementations?
  -	 In cahrt component there is unused dependancy injected. Tha
  -	 Update ngIf condition in chart html for displaying chart async way.
  -  Fix test cases