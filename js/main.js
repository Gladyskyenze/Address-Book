// business logic
function Contact(first, last, city,  street,  state) {
    this.firstName = first;
    this.lastName = last;
    this.city= city;
    this.street = street;
    this.state=state

  }
  
  // user interface logic
  $(document).ready(function() {
    $("form#new-contact").submit(function(event) {
      event.preventDefault();
  
      var inputtedFirstName = $("input#new-first-name").val();
      var inputtedLastName = $("input#new-last-name").val();
      var inputtedcity = $("input#new-city").val();
      var inputtedstreet = $("input#new-street").val();
      var inputtedstate = $("input#new-state").val();
      
  
      var newContact = new Contact(inputtedFirstName, inputtedLastName, inputtedcity, inputtedstate, inputtedstreet);
      
  
      $("ul#contacts").append("<li><span class='contact'>" + newContact.firstName + "</span></li>");
      $("ul#contacts").append("<li><span class='contact'>" + newContact.lastName + "</span></li>");
      $("ul#contacts").append("<li><span class='contact'>" + newContact.city + "</span></li>");
      $("ul#contacts").append("<li><span class='contact'>" + newContact.state + "</span></li>");
      $("ul#contacts").append("<li><span class='contact'>" + newContact.street + "</span></li>");
  
      $("input#new-first-name").val("");
      $("input#new-last-name").val("");
      $("input#new-city").val("");
      $("input#new-street").val("");
      $("input#new-state").val("");


    });
  }); 