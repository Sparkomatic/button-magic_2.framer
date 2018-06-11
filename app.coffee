buttonMajic = require 'buttonBehaviour'

buttonsArray = [Button1, Button2, Button3]
checkButtonsArray  = [Button4, Button5, Button6]

# selectedStyle = selectedButton.style
selectedStyle = {
	"backgroundColor": selectedButton.backgroundColor
# 	"outline": "1px solid red"
}
print selectedStyle.backgroundColor

# unselectedStyle = unselectedButton.style

unselectedStyle = {
	"backgroundColor": unselectedButton.backgroundColor
# 	"outline": "1px solid red"
}
print unselectedStyle.backgroundColor
# selectedStyle = Button2.style

buttonMajic.createRadioButtonBehaviour(buttonsArray, selectedStyle, unselectedStyle)
buttonMajic.createCheckButtonBehaviour(checkButtonsArray, selectedStyle, unselectedStyle)



# createCheckButtonBehaviour = (arrayOfButtons) ->
# 	for button in arrayOfButtons
# 		button.isOn = false
# 
# 		button.turnOn = -> @isOn = true
# 		button.turnOff = -> @isOn = false
# 
# 		button.showOn = -> @backgroundColor = 'black'
# 		button.showOff = -> @backgroundColor = 'grey'
# 
# 		button.flipSwitch = (button) ->
# 			print "button name and state is " + button.name + " " + button.isOn
# 			if @.isOn is false then @.turnOn()
# 			else if @.isOn is true then @.turnOff()
# 
# 		button.onClick (event, button) ->
# 			@flipSwitch(button)
# 			updateLayer(button)
# 			
# 		updateLayer = (button) ->
# 			if button.isOn
# 				print "ITS ON" + button.name
# 				button.showOn()
# 			else
# 				print "ITS OFF"
# 				button.showOff()
# 
# 	button.showOff()
# 			