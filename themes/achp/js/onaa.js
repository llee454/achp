/* 
  Behavior for ONAA office page
*/

(function ($) {

  Drupal.behaviors.onaa = {
    attach: function (context, settings) {
      $(document).once ('onaa').ajaxComplete (
        function (event, xhr, settings) {
         if (settings.url.indexOf ('/views/ajax') === 0) {
          initFilterBehavior ();
        }
      });
    }
  }

  $(document).ready (function () {
    
    initFilterBehavior ();

  })

  /*
    Accepts no arguments, returns undefined.
  */
  function initFilterBehavior () {
    setTextInputPlaceholder ();
    removeSubmitButtonText ();
  }

  /*
    Accepts no input, sets placeholder text on the text input
    element, and returns undefined.
  */
  function setTextInputPlaceholder () {
    getTextInputElement ().attr('placeholder', 'Filter Organization Assignments');
  }

  /*
    Accepts no input, removes default text from the submit
    button, and returns undefined.
  */
  function removeSubmitButtonText () {
    getFilterSubmitButton ().attr('value', '');
  }

  /*
    Accepts no arguments,submits this filter's view form 
    by simulating a click on the form's submit button, 
    and returns undefined.
  */
  function submitFilterForm () {
    getSubmitButtonElement ().click ();
  }

  /*
    Accepts no arguments and returns a jQuery
    HTML Element that represents the view form
    submit button.
  */
  function getSubmitButtonElement () {
    return getViewContainerElement ().find (getFilterSubmitButton ());
  }

  /*
    Accepts no arguments and returns a jQuery
    HTML Element that represents the text
    input field.
  */
  function getTextInputElement () {
    return getViewContainerElement ().find (getTextInputSelector ());
  }

  /*
    Accepts no arguments and returns a jQuery HTML Element
    that represents the submit button for the news filter.
  */
  function getFilterSubmitButton () {
    return getViewContainerElement ().find (getFilterSubmitElement ());
  }

  /*
    Accepts no arguments and returns a jQuery HTML element
    representing a submit button.
  */
  function getFilterSubmitElement () {
    return $(' .' + getSubmitClassName ());
  }

  /*
    Accepts no arguments and returns a jQuery HTML Element
    that represents the container for the staff list.
  */
  function getViewContainerElement () {
    return $('#' + getViewContainerID ());
  }

  /*
    Accepts no arguments and returns a string representing
    the text input field selector.
  */
  function getTextInputSelector () {
    return 'input[type="text"]';
  }

  /*
    Accepts no arguments and returns a string
    that represents the view form button's
    class name.
  */
  function getSubmitClassName () {
    return 'js-form-submit';
  }  

  /*
    Accepts no arguments and returns a string that
    represents the class name of the news landing
    page container.
  */
  function getViewContainerID () {
    return 'block-onaa-agency-assignments';
  }   
 
}) (jQuery);