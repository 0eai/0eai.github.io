
document.addEventListener("DOMContentLoaded",function() {
		"use strict";
  //var title = $(".title");
  var terminal = document.getElementById('terminal')

  var commandHistory = []
  var historyIndex = 0

  var command = "";
  var dot = '●'
/*##########################################################################################################
##############################################################################################################*/
//show ###############################################################################

var arrowPrompt = '➜ '
var questionPrompt = '? '
var dotPrompt = '● '
var passwordPrompt = '[gap] password for '

// DISPLAY FUNCTIONS
   function output(str) {
     var terminal = document.getElementById('terminal')
     var span = document.createElement('SPAN')
     span.className = 'output'
     terminal.appendChild(formatString(span, str))
     terminal.append("\n")
   }

   function error(str) {
     var terminal = document.getElementById('terminal')
     var span = document.createElement("SPAN")
     span.className = 'error'
     terminal.appendChild(formatString(span, str))
     terminal.append("\n")
   }

   function info(str) {
     var terminal = document.getElementById('terminal')
     var span = document.createElement("SPAN")
     span.className = 'info'
     terminal.appendChild(formatString(span, str))
     terminal.append("\n")
   }

   function prompt() {
     var terminal = document.getElementById('terminal')
     var span = document.createElement("SPAN")
     span.innerText = arrowPrompt
     span.className = 'prompt'
     terminal.appendChild(span)
   }
   function promptNode() {
     var terminal = document.getElementById('nodeterminal')
     var span = document.createElement("SPAN")
     span.innerText = arrowPrompt
     span.className = 'prompt'
     terminal.appendChild(span)
   }

   function dotPrompt() {
     var terminal = document.getElementById('terminal')
     var span = document.createElement("SPAN")
     span.innerText = dotPrompt
     span.className = 'prompt'
     terminal.appendChild(span)
   }

   function questionPrompt(str) {
     var terminal = document.getElementById('terminal')
     var span = document.createElement("SPAN")
     var spanStr = document.createElement("SPAN")
     span.innerText = questionPrompt
     spanStr.innerText = str + '.. '
     span.className = 'prompt'
     spanStr.className = 'question'
     terminal.appendChild(span)
     terminal.appendChild(spanStr)
   }

   function passwordPrompt(user) {
     var terminal = document.getElementById('terminal')
     var span = document.createElement("SPAN")
     span.innerText = passwordPrompt + user + ': '
     span.className = 'question'
     terminal.appendChild(span)
   }

   function nodeTerminal() {
     var terminal = document.getElementById('terminal')
     terminal.append("\n")
     terminal.style.display = 'none'

     var main = document.getElementById('main')
     var div = document.createElement("DIV")
     div.className = 'terminal'
     div.id = 'nodeterminal'
     main.appendChild(div)
     promptNode()
   }

   function rootTerminal() {
     var terminal = document.getElementById('terminal')
     terminal.style.display = 'block'
     var main = document.getElementById('main')
     main.removeChild(document.getElementById("nodeterminal"))
   }
// END DISPLAY FUNCTIONS

// UTILITY
  function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min
  }

  function pageScroll() {
    var offset = terminal.scrollHeight
    window.scrollTo(0,offset)
    //console.log(offset)
  }

  function formatString(span, str) {
    var strs = str.split(' ')
    for (var i = 0; i < strs.length; i++) {
       if (strs[i].startsWith('https://') || strs[i].startsWith('http://') || strs[i].startsWith('file:///')) {
         var a = document.createElement('a')
         a.innerText = strs[i]
         a.className = 'link'
         span.appendChild(a)
         span.append(' ')
       } else {
         span.append(strs[i] + ' ')
       }
     }
    return span
  }
  // END UTILITY
  // Commands ######################################################################################
  //##########################################################################################
  const commands = [{
                    "name": "clear",
                    "cmd": "clr",
                    "desc": "Clear screen.",
                    "function": clear
				  }, {
				    "name": "quit",
                    "cmd": "q",
                    "desc": "Quit gapashap.",
				    "function": quit
				  }, {
				    "name": "close",
                    "cmd": "c",
                    "desc": "Close gapashap.",
				    "function": close
				  }, {
				    "name": "minimize",
                    "cmd": "m",
                    "desc": "Minimize gapashap.",
				    "function": minimize
				  }, {
				    "name": "user",
                    "cmd": "usr",
                    "desc": "Display current user.",
				    "function": user
				  }, {
				    "name": "addPeer",
                    "cmd": "ap",
                    "desc": "Add new peer.",
				    "function": addPeer
				  }, {
				    "name": "listPeer",
                    "cmd": "lp",
                    "desc": "Display all peers.",
				    "function": listPeer
				  }, {
				    "name": "delPeer",
                    "cmd": "dp",
                    "desc": "Remove existing peer.",
				    "function": delPeer
				  }, {
				    "name": "createRoom",
                    "cmd": "cr",
                    "desc": "Create new room.",
				    "function": createRoom
				  }, {
				    "name": "listRoom",
                    "cmd": "lr",
                    "desc": "Display all rooms.",
				    "function": listRoom
				  }, {
				    "name": "exitRoom",
                    "cmd": "er",
                    "desc": "Exit from room.",
				    "function": exitRoom
				  }, {
				    "name": "apInRoom",
                    "cmd": "apr",
                    "desc": "Add peer in room.",
				    "function": addPeerInRoom
				  }, {
				    "name": "changePass",
                    "cmd": "cp",
                    "desc": "Change Password.",
				    "function": changePassword
				  }, {
				    "name": "changeNode",
                    "cmd": "cn",
                    "desc": "Change peer or room.",
				    "function": changeNode
				  }];

          function clear() {
              var terminal = document.getElementById('terminal')
              terminal.innerText = ''
            }

            function close() {

            }

            function minimize() {

            }

            function quit() {

            }

            function user() {

            }

            function addPeer() {

            }

            function listPeer() {

            }

            function delPeer() {

            }

            function createRoom() {

            }

            function listRoom() {

            }

            function exitRoom() {

            }

            function addPeerInRoom() {
              handle('addPeerInRoom')
            }

            function changePassword() {

            }

            function changeNode(args) {

            }

            function prevNode() {

            }

            function send(str) {
              //show.sendText(str)
            }

            function videoChat(str) {

            }
            function voiceChat(str) {

            }
            function sendFile(str) {

            }

            // END COMMANDS
            function changeTitle(str) {

            }
            function newPassword(arg) {

            }

            function updatePassword(arg) {

            }

            function getRoomId(arg) {

            }

            function insertRoom(arg) {

            }

            function removeRoom(arg) {

            }

            function getPeerId(arg) {

            }

            function insertPeer(arg) {

            }

            function removePeer(arg) {

            }

            function username(arg) {

            }

            function password(arg) {

            }

            function getUserPassword(cb) {

            }
            function incorrectPassword(cb){

            }

/*############################################################################################################
##############################################################################################################*/
  function processCommand() {
    var isValid = false

    // Create args list by splitting the command
    // by space characters and then shift off the
    // actual command.

    var args = command.split(" ")
    var cmd = args[0]
    args.shift()

    // Iterate through the available commands to find a match.
    // Then call that command and pass in any arguments.

    for (var i = 0; i < commands.length; i++) {
      if (cmd === commands[i].name || cmd === commands[i].cmd) {
        commands[i].function(args)
        updateCommandHistory()
        isValid = true
        break
      } else if(cmd === 'help' || cmd === 'h') {
        help()
        updateCommandHistory()
        isValid = true
        break
      }
    }

    // No match was found...
    if (!isValid ) {
        var str = 'gap: command not found: ' + command;
        output(str);
        updateCommandHistory();
    }

    //clean up.
    command = ''
  }

  function help() {
    var cmdHelp = '\n ●Gapashap\n\n  Root Commands:\n  '
    for (var i = 0; i < commands.length; i++) {
      cmdHelp += commands[i].name + '|' + commands[i].cmd + '\t-' + commands[i].desc + '\n  '
    }
    output(cmdHelp)
  }

  function updateCommandHistory(){
    commandHistory.push(command)
    historyIndex = commandHistory.length
  }

  // Delete n number of characters from the end of our output
  function erase(n) {
    command = command.slice(0, -n);
    if(db.getState().node === 'root') {
      terminal.innerHTML = terminal.innerHTML.slice(0, -n);
    } else {
      var nodeTerminal = document.getElementById('nodeterminal')
      nodeTerminal.innerHTML = nodeTerminal.innerHTML.slice(0, -n);
    }
  }

  function clearCommand() {
    if (command.length > 0) {
      erase(command.length)
    }
  }

  function appendCommand(str) {
    terminal.append(str)
    command += str
  }

  document.addEventListener("keydown", keydown, false);
  function keydown(e) {

    e = e || window.event;
    var keyCode = typeof e.which === "number" ? e.which : e.keyCode;

    // BACKSPACE
    if (keyCode === 8 && e.target.tagName !== "INPUT" && e.target.tagName !== "TEXTAREA") {
      e.preventDefault();
      if (command !== "") {
        erase(1);
      }
    }
      // UP or DOWN
      if (keyCode === 38 || keyCode === 40) {
      // Move up or down the history
        if (keyCode === 38) {
          // UP
          historyIndex--;
          if (historyIndex < 0) {
            historyIndex++;
          }
        } else if (keyCode === 40) {
         // DOWN
          historyIndex++;
          if (historyIndex > commandHistory.length - 1) {
            historyIndex--;
          }
        }

        // Get command
        var cmd = commandHistory[historyIndex];
        if (cmd !== undefined) {
          clearCommand();
          appendCommand(cmd);
        }
    }
  }

  document.addEventListener("keypress", keypress, false);
  function keypress(e) {
    // Make sure we get the right event
    e = e || window.event;
    var keyCode = typeof e.which === "number" ? e.which : e.keyCode;

    if (keyCode === 8 && e.target.tagName !== "INPUT" && e.target.tagName !== "TEXTAREA") {
      e.preventDefault();
      if (command !== "") {
        erase(1);
      }
    }

    // Which key was pressed?
    switch (keyCode) {
      // ENTER
      case 13: {
          terminal.append("\n");
          processCommand();
          prompt();
          break;
      }
      default: {
        appendCommand(String.fromCharCode(keyCode));
      }
    }
  }

  prompt();
});
