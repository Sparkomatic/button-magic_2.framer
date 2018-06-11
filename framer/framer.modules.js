require=(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"buttonBehaviour":[function(require,module,exports){
var createButtonActions, createButtonAppearance;

exports.createRadioButtonBehaviour = function(arrayOfButtons, selectedStyle, unselectedStyle) {
  var button, i, len, updateLayers;
  for (i = 0, len = arrayOfButtons.length; i < len; i++) {
    button = arrayOfButtons[i];
    createButtonActions(button);
    createButtonAppearance(button, selectedStyle, unselectedStyle);
    button.flipSwitch = function() {
      if (this.isOn === false) {
        this.turnOn();
      } else if (this.isOn === true) {
        this.turnOff();
      }
      return arrayOfButtons.forEach(function(layer) {
        if (layer !== button && layer.isOn === true) {
          return layer.turnOff();
        }
      });
    };
    button.onClick(function(event, button) {
      this.flipSwitch();
      return updateLayers(button);
    });
  }
  return updateLayers = function(clickedButton) {
    return arrayOfButtons.forEach(function(button) {
      if (button === clickedButton) {
        return button.showOn();
      } else {
        return button.showOff();
      }
    });
  };
};

exports.createCheckButtonBehaviour = function(arrayOfButtons, selectedStyle, unselectedStyle) {
  var button, i, len, results, updateLayer;
  results = [];
  for (i = 0, len = arrayOfButtons.length; i < len; i++) {
    button = arrayOfButtons[i];
    createButtonActions(button);
    createButtonAppearance(button, selectedStyle, unselectedStyle);
    button.flipSwitch = function(button) {
      if (button.isOn === false) {
        return button.turnOn();
      } else if (button.isOn === true) {
        return button.turnOff();
      }
    };
    button.onClick(function(event, button) {
      this.flipSwitch(button);
      return updateLayer(button);
    });
    results.push(updateLayer = function(button) {
      if (button.isOn) {
        return button.showOn();
      } else {
        return button.showOff();
      }
    });
  }
  return results;
};

createButtonActions = function(button) {
  button.isOn = false;
  button.turnOn = function() {
    return this.isOn = true;
  };
  button.turnOff = function() {
    return this.isOn = false;
  };
  return button;
};

createButtonAppearance = function(button, selectedStyle, unselectedStyle) {
  button.showOn = function() {
    return this.style = selectedStyle;
  };
  button.showOff = function() {
    return this.style = unselectedStyle;
  };
  return button;
};


},{}],"myModule":[function(require,module,exports){
exports.myVar = "myVariable";

exports.myFunction = function() {
  return print("myFunction is running");
};

exports.myArray = [1, 2, 3];


},{}]},{},[])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZnJhbWVyLm1vZHVsZXMuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL1VzZXJzL3Nwb29reS9MaWJyYXJ5L01vYmlsZSBEb2N1bWVudHMvY29tfmFwcGxlfkNsb3VkRG9jcy9GcmFtZXIvYnV0dG9uLW1hZ2ljXzIuZnJhbWVyL21vZHVsZXMvbXlNb2R1bGUuY29mZmVlIiwiLi4vLi4vLi4vLi4vLi4vVXNlcnMvc3Bvb2t5L0xpYnJhcnkvTW9iaWxlIERvY3VtZW50cy9jb21+YXBwbGV+Q2xvdWREb2NzL0ZyYW1lci9idXR0b24tbWFnaWNfMi5mcmFtZXIvbW9kdWxlcy9idXR0b25CZWhhdmlvdXIuY29mZmVlIiwibm9kZV9tb2R1bGVzL2Jyb3dzZXItcGFjay9fcHJlbHVkZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIjIEFkZCB0aGUgZm9sbG93aW5nIGxpbmUgdG8geW91ciBwcm9qZWN0IGluIEZyYW1lciBTdHVkaW8uIFxuIyBteU1vZHVsZSA9IHJlcXVpcmUgXCJteU1vZHVsZVwiXG4jIFJlZmVyZW5jZSB0aGUgY29udGVudHMgYnkgbmFtZSwgbGlrZSBteU1vZHVsZS5teUZ1bmN0aW9uKCkgb3IgbXlNb2R1bGUubXlWYXJcblxuZXhwb3J0cy5teVZhciA9IFwibXlWYXJpYWJsZVwiXG5cbmV4cG9ydHMubXlGdW5jdGlvbiA9IC0+XG5cdHByaW50IFwibXlGdW5jdGlvbiBpcyBydW5uaW5nXCJcblxuZXhwb3J0cy5teUFycmF5ID0gWzEsIDIsIDNdIiwiIyBhZGRzIHJhZGlvIGJ1dHRvbiBiZWhhdmlvdXIgdG8gYW4gYXJyYXkvZ3JvdXAgb2YgYnV0dG9uc1xuIyByZW5hbWUgZnVuY3Rpb24gdG8gbWFrZSBidXR0b25zIHJhZGlvIGJ1dHRvbiBvciBlcXVpdmFsZW50XG4jIGlzIGl0IHdvcnRoIGRvaW5nIGluIGEgY29uc3RydWN0b3IgLSBwcm9iYWJseSBub3QgYmVjYXN1ZSBpdCdzIGp1c3QgYWRkaW5nIGJlaGFzdmlvdXIgdG8gbGF5ZXIgb2JqZWN0IGFscmVhZHkgY3JlYXRlZFxuXG4jcmVmYWN0b3IgY29kZSByZXVzZSBEUllcblxuXG5leHBvcnRzLmNyZWF0ZVJhZGlvQnV0dG9uQmVoYXZpb3VyID0gKGFycmF5T2ZCdXR0b25zLCBzZWxlY3RlZFN0eWxlLCB1bnNlbGVjdGVkU3R5bGUpIC0+XG5cdGZvciBidXR0b24gaW4gYXJyYXlPZkJ1dHRvbnNcblxuXHRcdGNyZWF0ZUJ1dHRvbkFjdGlvbnMoYnV0dG9uKVxuXHRcdGNyZWF0ZUJ1dHRvbkFwcGVhcmFuY2UoYnV0dG9uLCBzZWxlY3RlZFN0eWxlLCB1bnNlbGVjdGVkU3R5bGUpXG5cblx0XHRidXR0b24uZmxpcFN3aXRjaCA9IC0+XG5cdFx0XHRpZiBAaXNPbiBpcyBmYWxzZSB0aGVuIEB0dXJuT24oKVxuXHRcdFx0ZWxzZSBpZiBAaXNPbiBpcyB0cnVlIHRoZW4gQHR1cm5PZmYoKVxuXHRcdFx0YXJyYXlPZkJ1dHRvbnMuZm9yRWFjaCAobGF5ZXIpIC0+XG5cdFx0XHRcdGlmIGxheWVyIGlzbnQgYnV0dG9uIGFuZCBsYXllci5pc09uIGlzIHRydWVcblx0XHRcdFx0XHRsYXllci50dXJuT2ZmKClcblxuXHRcdGJ1dHRvbi5vbkNsaWNrIChldmVudCwgYnV0dG9uKSAtPlxuXHRcdFx0QGZsaXBTd2l0Y2goKVxuXHRcdFx0dXBkYXRlTGF5ZXJzKGJ1dHRvbilcblxuXHR1cGRhdGVMYXllcnMgPSAoY2xpY2tlZEJ1dHRvbikgLT5cblx0XHRcdGFycmF5T2ZCdXR0b25zLmZvckVhY2ggKGJ1dHRvbikgLT5cblx0XHRcdFx0aWYgYnV0dG9uIGlzIGNsaWNrZWRCdXR0b25cblx0XHRcdFx0XHRidXR0b24uc2hvd09uKClcblx0XHRcdFx0ZWxzZVxuXHRcdFx0XHRcdGJ1dHRvbi5zaG93T2ZmKClcblxuZXhwb3J0cy5jcmVhdGVDaGVja0J1dHRvbkJlaGF2aW91ciA9IChhcnJheU9mQnV0dG9ucywgc2VsZWN0ZWRTdHlsZSwgdW5zZWxlY3RlZFN0eWxlKSAtPlxuXHRmb3IgYnV0dG9uIGluIGFycmF5T2ZCdXR0b25zXG5cdFx0Y3JlYXRlQnV0dG9uQWN0aW9ucyhidXR0b24pXG5cdFx0Y3JlYXRlQnV0dG9uQXBwZWFyYW5jZShidXR0b24sIHNlbGVjdGVkU3R5bGUsIHVuc2VsZWN0ZWRTdHlsZSlcblxuXG5cdFx0YnV0dG9uLmZsaXBTd2l0Y2ggPSAoYnV0dG9uKSAtPlxuXHRcdFx0aWYgYnV0dG9uLmlzT24gaXMgZmFsc2UgdGhlbiBidXR0b24udHVybk9uKClcblx0XHRcdGVsc2UgaWYgYnV0dG9uLmlzT24gaXMgdHJ1ZSB0aGVuIGJ1dHRvbi50dXJuT2ZmKClcblxuXHRcdGJ1dHRvbi5vbkNsaWNrIChldmVudCwgYnV0dG9uKSAtPlxuXHRcdFx0QGZsaXBTd2l0Y2goYnV0dG9uKVxuXHRcdFx0dXBkYXRlTGF5ZXIoYnV0dG9uKVxuXG5cdFx0dXBkYXRlTGF5ZXIgPSAoYnV0dG9uKSAtPlxuXHRcdFx0aWYgYnV0dG9uLmlzT25cblx0XHRcdFx0YnV0dG9uLnNob3dPbigpXG5cdFx0XHRlbHNlXG5cdFx0XHRcdGJ1dHRvbi5zaG93T2ZmKClcblxuY3JlYXRlQnV0dG9uQWN0aW9ucyA9IChidXR0b24pIC0+XG5cdGJ1dHRvbi5pc09uID0gZmFsc2Vcblx0YnV0dG9uLnR1cm5PbiA9IC0+IEBpc09uID0gdHJ1ZVxuXHRidXR0b24udHVybk9mZiA9IC0+IEBpc09uID0gZmFsc2Vcblx0cmV0dXJuIGJ1dHRvblxuXG5jcmVhdGVCdXR0b25BcHBlYXJhbmNlID0gKGJ1dHRvbiwgc2VsZWN0ZWRTdHlsZSwgdW5zZWxlY3RlZFN0eWxlKSAtPlxuXHRcdGJ1dHRvbi5zaG93T24gPSAtPiBAc3R5bGUgPSBzZWxlY3RlZFN0eWxlXG5cdFx0YnV0dG9uLnNob3dPZmYgPSAtPiBAc3R5bGUgPSB1bnNlbGVjdGVkU3R5bGVcblx0XHRyZXR1cm4gYnV0dG9uXG4iLCIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUVBQTtBRE9BLElBQUE7O0FBQUEsT0FBTyxDQUFDLDBCQUFSLEdBQXFDLFNBQUMsY0FBRCxFQUFpQixhQUFqQixFQUFnQyxlQUFoQztBQUNwQyxNQUFBO0FBQUEsT0FBQSxnREFBQTs7SUFFQyxtQkFBQSxDQUFvQixNQUFwQjtJQUNBLHNCQUFBLENBQXVCLE1BQXZCLEVBQStCLGFBQS9CLEVBQThDLGVBQTlDO0lBRUEsTUFBTSxDQUFDLFVBQVAsR0FBb0IsU0FBQTtNQUNuQixJQUFHLElBQUMsQ0FBQSxJQUFELEtBQVMsS0FBWjtRQUF1QixJQUFDLENBQUEsTUFBRCxDQUFBLEVBQXZCO09BQUEsTUFDSyxJQUFHLElBQUMsQ0FBQSxJQUFELEtBQVMsSUFBWjtRQUFzQixJQUFDLENBQUEsT0FBRCxDQUFBLEVBQXRCOzthQUNMLGNBQWMsQ0FBQyxPQUFmLENBQXVCLFNBQUMsS0FBRDtRQUN0QixJQUFHLEtBQUEsS0FBVyxNQUFYLElBQXNCLEtBQUssQ0FBQyxJQUFOLEtBQWMsSUFBdkM7aUJBQ0MsS0FBSyxDQUFDLE9BQU4sQ0FBQSxFQUREOztNQURzQixDQUF2QjtJQUhtQjtJQU9wQixNQUFNLENBQUMsT0FBUCxDQUFlLFNBQUMsS0FBRCxFQUFRLE1BQVI7TUFDZCxJQUFDLENBQUEsVUFBRCxDQUFBO2FBQ0EsWUFBQSxDQUFhLE1BQWI7SUFGYyxDQUFmO0FBWkQ7U0FnQkEsWUFBQSxHQUFlLFNBQUMsYUFBRDtXQUNiLGNBQWMsQ0FBQyxPQUFmLENBQXVCLFNBQUMsTUFBRDtNQUN0QixJQUFHLE1BQUEsS0FBVSxhQUFiO2VBQ0MsTUFBTSxDQUFDLE1BQVAsQ0FBQSxFQUREO09BQUEsTUFBQTtlQUdDLE1BQU0sQ0FBQyxPQUFQLENBQUEsRUFIRDs7SUFEc0IsQ0FBdkI7RUFEYTtBQWpCcUI7O0FBd0JyQyxPQUFPLENBQUMsMEJBQVIsR0FBcUMsU0FBQyxjQUFELEVBQWlCLGFBQWpCLEVBQWdDLGVBQWhDO0FBQ3BDLE1BQUE7QUFBQTtPQUFBLGdEQUFBOztJQUNDLG1CQUFBLENBQW9CLE1BQXBCO0lBQ0Esc0JBQUEsQ0FBdUIsTUFBdkIsRUFBK0IsYUFBL0IsRUFBOEMsZUFBOUM7SUFHQSxNQUFNLENBQUMsVUFBUCxHQUFvQixTQUFDLE1BQUQ7TUFDbkIsSUFBRyxNQUFNLENBQUMsSUFBUCxLQUFlLEtBQWxCO2VBQTZCLE1BQU0sQ0FBQyxNQUFQLENBQUEsRUFBN0I7T0FBQSxNQUNLLElBQUcsTUFBTSxDQUFDLElBQVAsS0FBZSxJQUFsQjtlQUE0QixNQUFNLENBQUMsT0FBUCxDQUFBLEVBQTVCOztJQUZjO0lBSXBCLE1BQU0sQ0FBQyxPQUFQLENBQWUsU0FBQyxLQUFELEVBQVEsTUFBUjtNQUNkLElBQUMsQ0FBQSxVQUFELENBQVksTUFBWjthQUNBLFdBQUEsQ0FBWSxNQUFaO0lBRmMsQ0FBZjtpQkFJQSxXQUFBLEdBQWMsU0FBQyxNQUFEO01BQ2IsSUFBRyxNQUFNLENBQUMsSUFBVjtlQUNDLE1BQU0sQ0FBQyxNQUFQLENBQUEsRUFERDtPQUFBLE1BQUE7ZUFHQyxNQUFNLENBQUMsT0FBUCxDQUFBLEVBSEQ7O0lBRGE7QUFiZjs7QUFEb0M7O0FBb0JyQyxtQkFBQSxHQUFzQixTQUFDLE1BQUQ7RUFDckIsTUFBTSxDQUFDLElBQVAsR0FBYztFQUNkLE1BQU0sQ0FBQyxNQUFQLEdBQWdCLFNBQUE7V0FBRyxJQUFDLENBQUEsSUFBRCxHQUFRO0VBQVg7RUFDaEIsTUFBTSxDQUFDLE9BQVAsR0FBaUIsU0FBQTtXQUFHLElBQUMsQ0FBQSxJQUFELEdBQVE7RUFBWDtBQUNqQixTQUFPO0FBSmM7O0FBTXRCLHNCQUFBLEdBQXlCLFNBQUMsTUFBRCxFQUFTLGFBQVQsRUFBd0IsZUFBeEI7RUFDdkIsTUFBTSxDQUFDLE1BQVAsR0FBZ0IsU0FBQTtXQUFHLElBQUMsQ0FBQSxLQUFELEdBQVM7RUFBWjtFQUNoQixNQUFNLENBQUMsT0FBUCxHQUFpQixTQUFBO1dBQUcsSUFBQyxDQUFBLEtBQUQsR0FBUztFQUFaO0FBQ2pCLFNBQU87QUFIZ0I7Ozs7QURyRHpCLE9BQU8sQ0FBQyxLQUFSLEdBQWdCOztBQUVoQixPQUFPLENBQUMsVUFBUixHQUFxQixTQUFBO1NBQ3BCLEtBQUEsQ0FBTSx1QkFBTjtBQURvQjs7QUFHckIsT0FBTyxDQUFDLE9BQVIsR0FBa0IsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAifQ==
