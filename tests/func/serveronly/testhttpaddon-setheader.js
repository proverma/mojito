/*
 * This is a basic func test for a Serveronly application.
 */
YUI({
    useConsoleOutput: true,
    useBrowserConsole: true,
    logInclude: { TestRunner: true }
}).use('node', 'node-event-simulate', 'test', 'console', 'intl', 'datatype-date-format', function (Y) {
   
     var suite = new Y.Test.Suite("Serveronly");

     suite.add(new Y.Test.Case({

          "test setHeader": function(){
                var that = this;
                var headers = getMyResponseHeader("/httpParent/testAddSetHeader?header_option=set");
                Y.Assert.areEqual('my_header: my_final_header_value', headers.match(/my_header: my_final_header_value/gi));
                Y.Assert.areEqual('I am done...Please check for the headers.', Y.one('body').one('p').get('innerHTML'));
           }
      }));    

      Y.Test.Runner.add(suite);
  
      function getMyResponseHeader(url){
	     var req = new XMLHttpRequest();
         req.open('HEAD', url, false);
         req.send(null);
         var headers = req.getAllResponseHeaders().toLowerCase();
    	 return headers;
      }

});
