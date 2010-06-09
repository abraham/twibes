// Find screen_name and primary nav for <li>
var session = $('meta[name=session-user-screen_name]')[0];
var page = $('meta[name=page-user-screen_name]')[0];
var primary = $('#primary_nav');

// No nav available to attach link. Do nothing.
if (!primary) {
// User is on / so link to own profile.
} else if (session && !page) {
  insertLi(session.content);
  // User viewing a profile page or subpage.
} else if (page) {
  insertLi(page.content);
}

// Insert <li> into profile page
function insertLi(screen_name) {
  var span = $('<span>Twibes Profile</span>');

  var anchor = $('<a href="http://www.twibes.com/user/' + screen_name + '"></a>');
  anchor.attr('target', '_blank');
  anchor.attr('id', 'twibes_anchor');
  anchor.attr('title', 'A twibe is a group of Twitter people with a common interest.');
  anchor.append(span);

  var tab = $('<li></li>');
  tab.attr('id', 'twibes_tab');
  tab.append(anchor);

  var nav = $('#primary_nav');
  nav.append(tab);  
}