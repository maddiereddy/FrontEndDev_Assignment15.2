# FrontEndDev_Assignment15.2
### Assignment 15.2 of the AcadGild Front End Web Dev Course

● Create a global service, should be available in whole application.  
 Make a left section as separate component having only links.  
● Then create 4 more components which will be rendered when user clicks  
 those left section links.  
● Make a link active if the user clicks that link.  
 And if user reloads the page, that link should be active.
 
<u><b>Notes:
 1. Angular CLI is used to create app. So, use `ng serve` to run on localhost:4200
 2. Created a Test Service which just provides a string when a component requests it
 3. Created a left-sided navbar which has a collapsible toggle.  
    Clicking on the button shows/hides the side menu  
    The side menu has 4 links: Home, About, Contact and Courses  
    In addition, there is a brand: Bazaar, which takes you to the home page  
 4. Each of the link opens its own page (component)  
 5. Implemented router to navigate between pages  
 6. Used `routerLinkActive` to set active link (red color)  
    Re-loading page still retains active link
 
     
    