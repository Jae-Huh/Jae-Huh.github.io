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
    },
    {
      title: 'Design to Web Blog',
      href: '/blog/t3-design-to-web-blog.html'
    },
    {
      title: 'JavaScript Basics',
      href: '/blog/t4-javascript-basics.html'
    },
    {
      title: 'Problem Solving',
      href: '/blog/t5-problem-solving.html'
    },
    {
      title: 'JavaScript Language',
      href: '/blog/t6-js-language.html'
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
    },
    {
      title: 'Emotional Intelligence',
      href: '/blog/c2-emotional-intelligence.html'
    },
    {
      title: 'Meditation Process',
      href: '/blog/c3-meditation-process.html'
    },
    {
      title: 'Daily Mindfulness',
      href: '/blog/c4-daily-mindfulness.html'
    },
    {
      title: 'Self-Confidence',
      href: '/blog/c5-self-confidence.html'
    },
    {
      title: 'Control',
      href: '/blog/c6-control.html'
    },
    {
      title: 'Motivation',
      href: '/blog/c7-motivation.html'
    },
    {
      title: 'Connecting',
      href: '/blog/c8-connecting.html'
    }
  ],
  [
    {
      title: 'Minesweeper',
      href: '/projects/minesweeper.html'
    },
    {
      title: 'Random Maori Proverb',
      href: '/projects/random-maori-proverb.html'
    }
  ]
]


function generateMenu() {
  //link to home
  document.querySelector('#home-about').innerHTML = '<a href="' + menu[0][0].href + '">' + menu[0][0].title + '</a>'

  //lists technical blog
  for (var i = 0; i < menu[1].length; i++) {
    document.querySelector('#technical').innerHTML += '<li><a href="' + menu[1][i].href + '">' + menu[1][i].title + '</a></li>'
  }

  //lists cultural blog
  for (var i = 0; i < menu[2].length; i++) {
    document.querySelector('#cultural').innerHTML += '<li><a href="' + menu[2][i].href + '">' + menu[2][i].title + '</a></li>'
  }

  //lists projects
  for (var i = 0; i < menu[3].length; i++) {
    document.querySelector('#projects').innerHTML += '<li><a href="' + menu[3][i].href + '">' + menu[3][i].title + '</a></li>'
  }
}

generateMenu()
