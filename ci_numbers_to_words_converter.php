<?php
/*
Plugin Name: CI Numbers to words converter
Plugin URI: https://www.calculator.io/numbers-to-words-converter/
Description: Convert numbers to words with our calculator. It accepts decimals and scientific notation and can display any U.S. dollar amount in words.
Version: 1.0.0
Author: Numbers to Words Converter / www.calculator.io
Author URI: https://www.calculator.io/
License: GPLv2 or later
Text Domain: ci_numbers_to_words_converter
*/

if (!defined('ABSPATH')) exit;

if (!function_exists('add_shortcode')) return "No direct call for Numbers to Words Converter by www.calculator.io";

function display_calcio_ci_numbers_to_words_converter(){
    $page = 'index.html';
    return '<h2><img src="' . esc_url(plugins_url('assets/images/icon-48.png', __FILE__ )) . '" width="48" height="48">Numbers to Words Converter</h2><div><iframe style="background:transparent; overflow: scroll" src="' . esc_url(plugins_url($page, __FILE__ )) . '" width="100%" frameBorder="0" allowtransparency="true" onload="this.style.height = this.contentWindow.document.documentElement.scrollHeight + \'px\';" id="ci_numbers_to_words_converter_iframe"></iframe></div>';
}


add_shortcode( 'ci_numbers_to_words_converter', 'display_calcio_ci_numbers_to_words_converter' );