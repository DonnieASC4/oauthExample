function onSignIn(googleUser){
    toggleHidden();
    var profile = googleUser.getBasicProfile();
    //change userName text, img source, & email text based on profile
    $(".userName").text(profile.getName());
    $("img").attr("src",profile.getImageUrl());
    $(".email").text(profile.getEmail());
}

function onSignOut(){
    //should sign user out and toggleHidden
 var auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut().then(function () {
      console.log('User signed out.');
      toggleHidden();
    });
}

function toggleHidden(){
    $(".mainContainer").toggleClass("hidden");
    $(".g-signin2").toggleClass("hidden");
    $(".signOut").toggleClass("hidden");
}