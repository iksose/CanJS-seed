
// For this example, we're not actually going out to
// a REST endpoint, so we'll use fixtures to emulate that.
// Fixtures help you test your application when you
// don't have access to your REST services.
var Todo = can.Model({
  findAll : 'GET /todos',
  findOne : 'GET /todos/{id}',
  create  : 'POST /todos',
  update  : 'PUT /todos/{id}',
  destroy : 'DELETE /todos/{id}'
  }, {});
var store = can.fixture.store(100, function(i) {
  return {
    id : i,
    name : 'Todo ' + i
  }
});
can.fixture('GET /todos', store.findAll);
can.fixture('GET /todos/{id}', store.findOne);
can.fixture('POST /todos', store.create);
can.fixture('PUT /todos/{id}', store.update);
can.fixture('DELETE /todos/{id}', store.destroy);


// Let's drag this out a bit.
can.fixture.delay = 500;


var myPromise = $.when(
    $.get("/todos", function(data){
      console.log(data)
      return cocks = data
    }) //end get
  )
myPromise.done(function(){
  console.log("Promise done")

    var template = can.view('//views/view1.mustache', 
                cocks)
    can.$(document.body).append(template);


})