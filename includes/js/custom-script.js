var $ = jQuery.noConflict();

$(document).ready(function($) {
    $('#search-form').submit(function(event) {
        event.preventDefault(); // Prevent the default form submission

        // Get the values from the form inputs
        var zipCode = $('#zipCode').val();
        var storeId = $('#storeId').val();
        var distance = $('#distance').val();

        // Call your_custom_ajax_function with the form values
        your_custom_ajax_function(zipCode, storeId, distance);
    });
});

function your_custom_ajax_function(zipCode, storeId, distance) {
    // Fetch API URL and secret key from apiSettings
    var apiUrl = apiSettings.apiUrl;
    var secretKey = apiSettings.encryptionKey;

    $.ajax({
        url: apiUrl, // Use ACF API URL from apiSettings
        method: 'GET',
        data: {
            zipCode: zipCode,
            storeid: storeId,
            distance: distance,
            includeBlackListed: true,
            page_size: 50,
            page_number: 1
        },
        success: function(response) {
            if (response && response.data) {
                const decryptedData = CryptoJS.AES.decrypt(response.data, secretKey); // Use ACF secret key from apiSettings
                const originalData = decryptedData.toString(CryptoJS.enc.Utf8);
                displayDataInTable(originalData);
            } else {
                console.log('No data available.');
            }
        },
        error: function(xhr, status, error) {
            console.error('Error:', error);
        }
    });
}

function displayDataInTable(data) {
    var tableContent = '<table>';
    tableContent += '<thead><tr><th>License Key</th><th>Business Name</th><th>Contact Street</th><th>Contact City</th><th>Contact Postal Code</th><th>Contact State</th></tr></thead>';
    tableContent += '<tbody>';

    var responseData = JSON.parse(data);

    if (responseData && responseData.dealers) {
        responseData.dealers.forEach(function(dealer) {
            var licenseKey = dealer.fullLicenseKey;
            var businessName = dealer.businessname;
            var contactStreet = dealer.contactstreet;
            var contactCity = dealer.contactcity;
            var contactPostalCode = dealer.contactpostalcode;
            var contactState = dealer.contactstate;

            tableContent += '<tr>';
            tableContent += '<td>' + licenseKey + '</td>';
            tableContent += '<td>' + businessName + '</td>';
            tableContent += '<td>' + contactStreet + '</td>';
            tableContent += '<td>' + contactCity + '</td>';
            tableContent += '<td>' + contactPostalCode + '</td>';
            tableContent += '<td>' + contactState + '</td>';
            tableContent += '</tr>';
        });
    } else {
        console.log('No data available or invalid data format.');
    }

    tableContent += '</tbody></table>';

    $('#data-table-container').html(tableContent);
}
