$(function () {
  $(".j-tooltip").tooltip();
  var gem_install_message_pre =
    "\
Fetching: Ashutosh_Agarwal.gem (100%)\
\nFetching: Gyanesha_Prajjwal.gem (100%)\
\nFetching: Jeya_Surya.gem (100%)\
\nFetching: Piyush_Mantri.gem (100%)\
\nFetching: Raghav_Grover.gem (100%)\
\nFetching: Rishabh_Sethi.gem (100%)\
\nFetching: Ritesh_Gupta.gem (100%)\
\nFetching: Romit_Kumar.gem (100%)\
\nFetching: Ruchi_Singh.gem (100%)\
\nFetching: Saurabh_Kumar.gem (100%)\
\nFetching: Shivansh_Agarwal.gem (100%)\
\nFetching: Shubham_Gupta.gem (100%)\
\nFetching: Shubham_Kumar_Gupta.gem (100%)\
\nFetching: Shyamali_Murmu.gem (100%)\
\n ";
  var gem_install_message_post =
    "\
\n[[b;#d33682;]==== Thank you for installing RECursion farewell gems ====]\
\n\
\nNow that you have installed these gems, you have earned our immense respect.\
\nYou are the star guest of The Farewell Program, you will receive our special\
\nattention.\
\n[[b;#859900;]Go ahead and type what you desire the most on the command prompt.]\
\n\
\nWe love you!\
\n\
\n[[b;#b58900;]Team RECursion]\
\n\
\n[[b;#d33682;]=======================================]\n    ";
  var prompt = "[[b;#d33682;]root]@[[b;#6c71c4;]farewell] ~$ ";
  var days_left = Math.round(
    (new Date("2013 11 29") - new Date()) / (1000 * 60 * 60 * 24)
  );
  var wedding_url = "http://goo.gl/4tqfMs";
  var rsvp_url = "https://twitter.com/jaipandya";
  var venue_address =
    "\
Gandhi Nagar Club Gardens\
\n(Near Gandhi Nagar Girls' School),\
\nGandhi Nagar, Jaipur\
\nPin - 302015\
    ";
  var ganesha =
    "\
\n                 _.!._             \
\n                /O*@*O\\           \
\n              <\\@(_)@/>           \
\n      ,;,   .--;`     `;--.   ,    \
\n      O@O_ /   |d     b|   \\ _hnn \
\n      | `/ \\   |       |   / \\` |\
\n      &&&&  :##;\\     /;##;  &&&& \
\n      |  \\ / `##/|   |##'  \\ /  |\
\n      \\   %%`</|   |#'`%%   / \
\n       '._|_ \\   |   |'  / _|_.'  \
\n         _/  /   \\   \\   \\  \\  \
\n        / (\\(     '.  '-._&&&&    \
\n       (  ()##,    o'--.._`\\-)    \
\n        '-():`##########'()()()    \
\n         /:::::/()`Y`()\\:::::\\   \
\n         \\::::( () | () )::::/    \
\n          `\"\"\"`\\().'.()/'\"\"\"`     \
\n          \
  ";
  var invitation_pre =
    "\
\n[[b;#d33682;]========= RECursion Farewell Invitation ==========]\
  ";
  var jai_weds_prerita =
    "\
\n  _______                     _____  ______ _____               _             \
\n |__   __|                   |  __ \\|  ____/ ____|             (_)            \
\n    | | ___  __ _ _ __ ___   | |__) | |__ | |    _   _ _ __ ___ _  ___  _ __  \
\n    | |/ _ \\/ _` | '_ ` _ \\  |  _  /|  __|| |   | | | | '__/ __| |/ _ \\| _   \\ \
\n    | |  __/ (_| | | | | | | | | \\ \\| |___| |___| |_| | |  \\__ \\ | (_) | | | |\
\n    |_|\\___|\\__,_|_| |_| |_| |_|  \\_\\______\\_____\\__,_|_|  |___/_|\\___/|_| |_|\
\n\
  ";
  var invitation_post =
    "\
\nDear Senior,\
\n\
\n            We all these days remained together, \
\n            With countless memories to cherish,\
\n            More memory we will gather,\
\n            To share again before we perish.\
\n\
\nJoin us to celebrate the Online Farewell of RECursion - Batch of 2020,   \
\nwhen your calendar shows [[b;#2aa198;]Tuesday, 28th of July, 2020]                   \
\nas your clock creeps [[b;#2aa198;]7PM], the link to which will be shared soon.                      \
\n\
\nYou are cordially invited to join this gracious event.\
\n\
\nWith Love,\
\nTeam RECursion\
";
  var wedding_help =
    "\
Commands: \
\n\t[[b;#268bd2;]farewell invitation]       [[b;#2aa198;]# Your invitation card is inside this envelope] \
";
  var bride =
    "\
\n[[b;#d33682;]========= Bride ==========]\
\n\
\nThe bride's name is Prerita\
\nShe is a Banker, Traveller, Dancer, Painter, Dreamer\
\nShe works as Asst. Manager at Bank of Baroda\
\nIf you want to contact her, her email ID\
\nis preritayadav@gmail.com\
\n\
  ";
  var groom =
    "\
\n[[b;#d33682;]========= Groom ==========]\
\n\
\nThe groom's name is Jai\
\nHe is a Programmer, Traveller, Photographer, Biker, SlideShare Engineer\
\nHe works as a Hacker at SlideShare\
\nemail - jaipandya@gmail.com\
\nlinkedin - https://www.linkedin.com/in/jaipandya \
\ntwitter - https://twitter.com/jaipandya \
\ngithub - https://github.com/jaipandya \
\n\
  ";
  var rsvp =
    "\
\nYou can RSVP to the event by sending an email to\
\nJai (jaipandya@gmail.com)\
\nor Prerita (preritayadav@gmail.com)\
\n        \
  ";
  var you_are_late =
    "\
\n\nWe are in the Endgame now!\
\nIn order to retrieve your invitation, first install farewell gem using [[b;#859900;]gem install farewell] command.\n ";
  if (days_left >= 0) {
    you_are_late = "";
  }
  var greetings =
    you_are_late +
    jai_weds_prerita +
    "\nPress [[b;#859900;]enter (↩)] to install the gem on this terminal.\
\n  ";
  var gem_list_empty = "\n*** LOCAL GEMS ***\n";
  var gem_list_full =
    "\n*** LOCAL GEMS ***\n\naddressable (2.3.5)\nlaunchy (2.3.0)\nrequire_all (1.3.2)\nthor (0.18.1)\nartii (2.0.3)\nrainbow (1.1.4)\nwedding (0.0.1)\n";
  var print_gem =
    "RubyGems is a sophisticated package manager for Ruby.  This is a\nbasic help message containing pointers to more information.\n\n  Usage:\n    gem -v\n    gem command [arguments...] [options...]\n\n  Examples:\n    gem install rake\n    gem list --local\n    gem build package.gemspec\n    gem help install\n\n  Further help:\n    gem help commands            list all 'gem' commands\n    gem help examples            show some examples of usage\n    gem help platforms           show information about platforms\n    gem help <COMMAND>           show help on COMMAND\n                                   (e.g. 'gem help install')\n    gem server                   present a web page at\n                                 http://localhost:8808/\n                                 with info about installed gems\n  Further information:\n    http://rubygems.rubyforge.org";
  function print_slowly(term, paragraph, callback) {
    var foo, i, lines;
    lines = paragraph.split("\n");
    term.pause();
    i = 0;
    foo = function (lines) {
      return setTimeout(function () {
        if (i < lines.length - 1) {
          term.echo(lines[i]);
          i++;
          return foo(lines);
        } else {
          term.resume();
          return callback();
        }
      }, 1000);
    };
    return foo(lines);
  }
  function require_command(command_regex, terminal_history) {
    var executed = false;
    $.each(terminal_history, function (index, value) {
      if (command_regex.test(value)) {
        executed = true;
      }
    });
    return executed;
  }
  var gem_install_regex = /gem +install +farewell */gi;
  function gem(inputs, term) {
    if (!inputs[1]) {
      term.echo(print_gem);
    } else if (inputs[1] === "install" && inputs[2] === "farewell") {
      print_slowly(term, gem_install_message_pre, function () {
        term.echo(gem_install_message_post);
      });
    } else if (inputs[1] === "-v") {
      term.echo("1.3.6");
    } else if (inputs[1] == "list") {
      term.echo(gem_list_full);
    } else {
      term.echo(inputs.join(" ") + " is not what we are inviting you for");
    }
  }
  function wedding(inputs, term) {
    if (!inputs[1]) {
      term.echo(wedding_help);
    } else if (inputs[1] === "honourable" && inputs[2] == "guest") {
      term.echo(bride);
    } else if (inputs[1] === "schedule") {
      term.echo(groom);
    } else if (inputs[1] === "invitation") {
      term.echo(invitation_pre);
      term.pause();
      setTimeout(function () {
        term.resume();
        term.echo(jai_weds_prerita);
        term.pause();
        setTimeout(function () {
          term.resume();
          term.echo(invitation_post);
        }, 400);
      }, 1500);
    } else if (inputs[1] === "location") {
      term.echo(venue_address);
      term.echo(wedding_url);
      term.push(
        function (command, term) {
          if (/y(es){0,1}/.test(command)) {
            window.open(wedding_url, "_blank");
          }
          term.pop();
        },
        {
          prompt: "Do you want to open this link in the browser? (yes/no) ",
          greetings: null,
        }
      );
    } else if (inputs[1] === "rsvp") {
      term.echo(rsvp);
      term.push(
        function (command, term) {
          window.open(rsvp_url, "_blank");
          term.pop();
        },
        {
          prompt:
            "alternatively send me a tweet in a new window when you press [[b;#859900;]enter (↩)]",
          greetings: null,
        }
      );
    } else {
      term.error("Do you need 'help'?");
    }
  }
  function interpreter(input, term) {
    var command, inputs;
    inputs = input.split(/ +/);
    command = inputs[0];
    if (command === "gem") {
      gem(inputs, term);
    } else if (command === "farewell" || command === "help") {
      window.terminal = term;
      if (require_command(gem_install_regex, term.history().data())) {
        wedding(inputs, term);
      } else {
        term.error(
          "Please install the gem first by executing\ngem install farewell"
        );
      }
    } else if (/(cd)|(ls)|(cat)/.test(command)) {
      bash(inputs, term);
    } else if (input === "ruby -v") {
      term.echo("1.9.3");
    } else if (/which +wedding/.test(input)) {
      if (require_command(gem_install_regex, term.history().data())) {
        term.echo("/usr/bin/wedding");
      }
    } else if (/whoami/.test(input)) {
      term.echo("root");
    } else if (command.length === 0) {
    } else {
      term.error("Do you need 'help'?");
    }
  }
  function bash(inputs, term) {
    var argument, echo, insert;
    echo = term.echo;
    insert = term.insert;
    if (!inputs[1]) {
      return console.log("none");
    } else {
      argument = inputs[1];
      if (/^\.\./.test(argument)) {
        return echo("-bash: cd: " + argument + ": Permission denied");
      } else {
        return echo("-bash: cd: " + argument + ": No such file or directory");
      }
    }
  }
  $("#terminal").terminal(interpreter, {
    prompt: prompt,
    name: "wedding",
    greetings: greetings,
    height: 600,
    onInit: function (term) {
      term.insert("gem install farewell");
      term.history().clear();
    },
    completion: function (term, string, callback) {
      callback([
        "gem install farewell",
        "farewell invitation",
        "farewell location",
        "farewell schedule",
      ]);
    },
    tabcompletion: true,
  });
});
