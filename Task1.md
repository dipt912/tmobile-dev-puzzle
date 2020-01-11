# Task #1 : T-Mobile Coding Challenge

# 1. What is done well?
  - Project component and module structure well
  - Nice way to handle child component
  -	Application data management done well. Very nice way to write action and reducer pattern
  - Set up test cases for component modules


# 2. What would you change?
  -	 Here we are using apiKeys for stock data. Instead of environment variable , save secure way (e.g get all secret from secret           manager ot other tool).
  -	 Google chart not displaying when you get data from network. I have to Fix binding
  -	  Default value of chart pass as a input data in component. In case in future if any user requirement to update chart type of      size then we can make some selection type and pass it to chart component.
  - There is multiple request going on network. For example if you fill some data and click button  and after some time again click on
     go button without any change on form, there is same request on network side. This issue better way to resolve  by cache/memoize mechanism.
  
  -   Disable Go button if form is invalid.
  -  subscriber event have to unsubscribe on destroy life cycle method.


# 3. Are there any code smells or problematic implementations?
  -	 In chart component removed unused dependency injected. 
  -	 Update ngIf condition in chart html for displaying chart async way.
  -  Fix test cases
  -  Remove unnecessary subscriber events