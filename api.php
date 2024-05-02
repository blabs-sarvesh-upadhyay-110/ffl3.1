<?php
/*
Template Name: api
*/
get_header();
?>

<div id="primary" class="content-area">
    <main id="main" class="site-main">
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <form id="search-form">
                        <label for="zipCode">Zip Code:</label>
                        <input type="text" id="zipCode" name="zipCode">
                        <label for="storeId">Store ID:</label>
                        <input type="text" id="storeId" name="storeId">
                        <label for="distance">Distance:</label>
                        <input type="text" id="distance" name="distance">
                        <button type="submit">Search</button>
                    </form>
                    <div id="data-table-container"></div>
                </div>
            </div>
        </div>
    </main><!-- #main -->
</div><!-- #primary -->

<?php
get_footer();
?>