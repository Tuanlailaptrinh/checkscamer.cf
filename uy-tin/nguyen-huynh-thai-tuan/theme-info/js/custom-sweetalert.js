
        $(window).on('ajaxBeforeSend',function(){
            swal({
              title: 'HĂ£y chá»',
              text: "Äang xá»­ lĂ½.....",
              type: 'info',
              padding: '2em'
            })
        })

        // $(window).on('ajaxSuccess',function(a,b,c,d){
        //     $('#monhe').modal('show');
        // })
        $(document).on('ajaxSetup', function(event, context) {
    // Enable AJAX handling of Flash messages on all AJAX requests
    context.options.flash = true

    // Enable the StripeLoadIndicator on all AJAX requests
    context.options.loading = $.oc.stripeLoadIndicator

    // Handle Error Messages by triggering a flashMsg of type error
    context.options.handleErrorMessage = function(message) {
        swal({
                  title: 'Tháº¥t báº¡i!',
                  text: message,
                  type: 'error',
                  padding: '2em'
            })
    }

    // Handle Flash Messages by triggering a flashMsg of the message type
    context.options.handleFlashMessage = function(message, type) {
        if(type == 'success') {
        swal({
                  title: 'ThĂ nh cĂ´ng',
                  text: message,
                  type: type,
                  padding: '2em'
            })
        } else if(type == 'info') {
          swal({
                title: 'Xin chá»,...',
                text: message,
                timer: 5000,
                padding: '2em',
                onOpen: function () {
                  swal.showLoading()
                }
              }).then(function (result) {
                if (
                  // Read more about handling dismissals
                  result.dismiss === swal.DismissReason.timer
                ) {
                  console.log('I was closed by the timer')
                }
              })
        } else {
            
            swal({
                  title: 'Tháº¥t báº¡i',
                  text: message,
                  type: type,
                  padding: '2em'
            })
        }



            
    }
})