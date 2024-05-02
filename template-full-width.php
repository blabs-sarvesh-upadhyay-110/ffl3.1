<?php
/**
 * Template Name: One Elementor Full Width
 *
 * This is the template that displays only HomePage as Per selected.
 * Please note that this is the WordPress construct of pages
 * and that other 'pages' on your WordPress site may use a
 * different template.
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/
 *
 * @package One Elementor
 */
get_header();
?>

<div class="one-elementor-page one-elementor-page__full site-page p-0">
    <?php
    while ( have_posts() ) :
        the_post();

        get_template_part( 'template-parts/content', 'page' );

        // If comments are open or we have at least one comment, load up the comment template.
        if ( comments_open() || get_comments_number() ) :
            comments_template();
        endif;

    endwhile; // End of the loop.
    ?>
</div>
<?php get_footer();