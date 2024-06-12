When you create a project with transitions like this, you run into challenges when supporting devices. The primary challenge was not using CSS "vh" units as they change value on mobile depending on whether you're scrolling up or down the page.

The solution I used was to size & position viewscreen elements based on the window height on load.