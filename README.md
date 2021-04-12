# Password Generator

<b> This application generates a randomized password for a user based on selectable criteria delivered in pop-up windows.</b>

- - -

After the "Generate Password" button is clicked, the user is prompted to enter the desired length of their password.  This may be and integer between 8 and 128 characters.  The input is verified to be acceptable before proceeding.  

If it does not fit the acceptable criteria an alert message is displayed and the user is prompted again. If the user clicks cancel during this prompt the generation function is exited and the textbox remains unchanged.

If proceeding the user is asked to confirm types of characters to include in the password:

* Uppercase letters
* Lowercase letters
* Numbers
* and Special Characters

The user may confirm the use of these characters with the "OK" button on the pop-up or decline their use with "cancel".

Once all prompts are answered and criteria are confirmed the textbox in the center of the page will display the generated password string.

The program may then be run again by pressing the generator button.

The applications page should appear as follows:

![The Password Generator application displays a red button to "Generate Password".](pass_gen_deployed.png)

The deployed page can be found [<b>HERE</b>](https://curtisaurus.github.io/password-gen/)