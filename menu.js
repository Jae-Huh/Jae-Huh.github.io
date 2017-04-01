var menu = [
  [
    {
      title: 'HOME: About',
      href: '/index.html'
    }
  ],
  [
    {
      title: 'HTML, CSS and DOM - Part 1',
      href: '/blog/t2-html-css-dom-p1.html'
    },
    {
      title: 'HTML, CSS and DOM - Part 2',
      href: '/blog/t2-html-css-dom-p2.html'
    }
  ],
  [
    {
      title: 'Reflection on EDA',
      href: '/blog/c1-reflection-blog.html'
    },
    {
      title: 'Time and Habits',
      href: '/blog/c1-time-and-habits-blog.html'
    }
  ],
  // []
]


function generateMenu() {
  //lists technical blog
  for (var i = 0; i < menu[1].length; i++) {
    document.querySelector('#technical').innerHTML += '<li><a href="' + menu[1][i].href + '">' + menu[1][i].title + '</a></li>'
  }
}

generateMenu()
