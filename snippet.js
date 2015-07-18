/*
 * The MIT License (MIT)
 * Copyright (c) 2015 Antonio Carlos Barbosa. All rights reserved.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a
 * copy of this software and associated documentation files (the "Software"),
 * to deal in the Software without restriction, including without limitation
 * the rights to use, copy, modify, merge, publish, distribute, sublicense,
 * and/or sell copies of the Software, and to permit persons to whom the
 * Software is furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER
 * DEALINGS IN THE SOFTWARE.
 *
 */

/*jslint vars: true, plusplus: true, devel: true, nomen: true, regexp: true, indent: 4, maxerr: 50 */
/*global define, brackets, window */

define(function (require, exports, module) {
    'use strict';

    var snippets = {};

    // Bootstrap 3 - Minimum Template

    snippets.jadbs3 = 'doctype html\n' +
        '//if lt IE 7\n' +
        "  html.no-js.lt-ie9.lt-ie8.lt-ie7(lang='')  \n" +
        '//if IE 7\n' +
        '  html.no-js.lt-ie9.lt-ie8(lang=\'\')  \n' +
        '//if IE 8\n' +
        '  html.no-js.lt-ie9(lang=\'\')  \n' +
        '// [if gt IE 8] <!\n' +
        'html.no-js(lang=\'\')\n' +
        '  // <![endif]\n' +
        '  head\n' +
        '    meta(charset=\'utf-8\')\n' +
        '    meta(http-equiv=\'X-UA-Compatible\', content=\'IE=edge,chrome=1\')\n' +
        '    title [INSERT SITE TITLE HERE]\n' +
        '    meta(name=\'viewport\', content=\'width=device-width, initial-scale=1.0\')\n' +
        '    meta(name=\'description\', content=\'[ENTER SITE DESCRIPTION HERE]\')\n' +
        '    meta(name=\'author\', content=\'[ENTER AUTHOR INFO HERE]\')\n' +
        '    link(rel=\'apple-touch-icon\', href=\'[INSERT apple-tuch-icon.png]\')\n' +
        '    style.\n' +
        '      body {\n' +
        '      padding-top: 50px;\n' +
        '      padding-bottom: 20px;\n' +
        '      }\n' +
        '    link(rel=\'stylesheet\', href=\'https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap.min.css\')\n' +
        '    // link rel="stylesheet" href="./css/main.css">\n' +
        '    // script src="//cdnjs.cloudflare.com/ajax/libs/modernizr/2.8.3/modernizr.min.js"></script>\n' +
        '  body\n' +
        '    //if IE\n' +
        '      script(src=\'https://cdn.jsdelivr.net/html5shiv/3.7.2/html5shiv.min.js\')\n' +
        '      script(src=\'https://cdn.jsdelivr.net/respond/1.4.2/respond.min.js\')\n' +
        '    // Start coding here\n' +
        '    // Coding End\n' +
        '    script(src=\'https://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js\')\n' +
        '    script(src=\'https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/js/bootstrap.min.js\')\n' +
        '\n';

    // Alert

    snippets.jadalertdanger = '.alert.alert-danger\n' +
        '  button.close(type=\'button\', data-dismiss=\'alert\', aria-hidden=\'true\')\n' +
        '    | ×\n' +
        '  strong INSERT TITLE HERE\n' +
        '  | INSERT BODY HERE\n';

    snippets.jadalertinfo = '.alert.alert-info\n' +
        '  button.close(type=\'button\', data-dismiss=\'alert\', aria-hidden=\'true\')\n' +
        '    | ×\n' +
        '  strong INSERT TITLE HERE\n' +
        '  |  INSERT BODY HERE\n';


    snippets.jadalertsuccess = '.alert.alert-success\n' +
        '  button.close(type=\'button\', data-dismiss=\'alert\', aria-hidden=\'true\')\n' +
        '    | ×\n' +
        '  strong INSERT TITLE HERE\n' +
        '  |  INSERT BODY HERE\n';

    snippets.jadalertwarning = '.alert.alert-warning\n' +
        '  button.close(type=\'button\', data-dismiss=\'alert\', aria-hidden=\'true\')\n' +
        '    | ×\n' +
        '  strong INSERT TITLE HERE\n' +
        '  |  INSERT BODY HERE\n';

    snippets.jadalert = '.alert\n' +
        '  button.close(type=\'button\', data-dismiss=\'alert\', aria-hidden=\'true\')\n' +
        '    | ×\n' +
        '  strong INSERT TITLE HERE\n' +
        '  |  INSERT BODY HERE\n';

    // Badge

    snippets.jadbadge = "span.badge INSERT BADGE HERE\n";

    ///### Breadcrumbs

    snippets.jadbreadcrumbs = 'ol.breadcrumb\n' +
        '  li\n' +
        '    a(href=\'#\') [Home]\n' +
        '  li\n' +
        '    a(href=\'#\') [About]\n' +
        '  | }\n' +
        '  li.active [Contact]\n';
    // Buttons

    snippets.jadblockbuttondanger = "button.btn.btn-large.btn-block.btn-danger(type='button') [button]\n";
    snippets.jadblockbuttondefault = "button.btn.btn-large.btn-block.btn-default(type='button') [button]\n";
    snippets.jadblockbuttondisabled = "button.btn.btn-large.btn-block.disabled(type='button', class='btn-{2:default}') [button]\n";
    snippets.jadblockbuttoninfo = "a.btn.btn-large.btn-block.btn-info(href='#', role='button') [button]\n";
    snippets.jadblockbuttonprimary = "button.btn.btn-large.btn-block.btn-primary(type='button') [button]\n";
    snippets.jadblockbuttonsuccess = "a.btn.btn-large.btn-block.btn-success(href='#', role='button') [button]\n";
    snippets.jadblockbuttonwarning = "a.btn.btn-large.btn-block.btn-warning(href='#', role='button') [button]\n";
    snippets.jadblockbutton = "button.btn.btn-large.btn-block.btn-default(type='button') [button]\n";
    snippets.jadbuttondanger = "button.btn.btn-danger(type='button') [button]\n";
    snippets.jadbuttondefault = "button.btn.btn-default(type='button') [button]\n";
    snippets.jadbuttondisabled = "button.btn.btn-primary.disabled(type='button') [button]\n";
    snippets.jadbuttongroupvertical = '.btn-group-vertical\n' +
        '  button.btn.btn-default(type=\'button\') [Top]\n' +
        '  button.btn.btn-default(type=\'button\') [Middle]\n' +
        '  button.btn.btn-default(type=\'button\') [Bottom]\n';

    snippets.jadbuttongroup = ".btn-group\n" +
        "  button.btn.btn-default(type=\'button\') [Left]\n" +
        "  button.btn.btn-default(type=\'button\') [Middle]\n" +
        "  button.btn.btn-default(type=\'button\') [Right]\n";
    snippets.jadbuttoninfo = "button.btn.btn-info(type='button') [button]\n";
    snippets.jadbuttonprimary = "button.btn.btn-primary(type=\'button\') [button]\n";
    snippets.jadbuttonsuccess = "button.btn.btn-success(type=\'button\') [button]\n";

    snippets.jadbuttontoolbar = ".btn-toolbar\n" +
        "  .btn-group\n" +
        "  .btn-group\n" +
        "  .btn-group\n";
    snippets.jadbuttonwarning = "button.btn.btn-warning(type='button') [button]\n";
    snippets.jadbutton = "button.btn.btn-default(type='button') [button]\n";
    snippets.jadlgbuttondanger = "button.btn.btn-danger(type='button') [button]\n";
    snippets.jadlgbuttondisabled = "button.btn.btn-lg.btn-default.disabled(type='button') [button]\n";
    snippets.jadlgbuttoninfo = "a.btn.btn-lg.btn-info(href='#', role='button') button\n";
    snippets.jadlgbuttonprimary = "button.btn.btn-lg.btn-primary(type='button') [button]\n";
    snippets.jadlgbuttonsuccess = "button.btn.btn-lg.btn-success(type='button') [button]\n";
    snippets.jadlgbuttonwarning = "a.btn.btn-lg.btn-warning(href='#', role='button') button\n";
    snippets.jadlgbutton = "button.btn.btn-lg.btn-default(type='button') [button]\n";
    snippets.jadlgbuttondefault = "button.btn.btn-lg.btn-default(type='button') [button]\n";
    snippets.jadminibuttondanger = "button.btn.btn-xs.btn-danger(type='button') [button]\n";
    snippets.jadminibuttondefault = "button.btn.btn-xs.btn-default(type='button') [button]\n";
    snippets.jadminibuttondisabled = "button.btn.btn-xs.btn-default(type='button') [button]\n";
    snippets.jadminibuttoninfo = "button.btn.btn-xs.btn-info(type='button') [button]\n";
    snippets.jadminibuttonprimary = "button.btn.btn-xs.btn-primary(type='button') [button]\n";
    snippets.jadminibuttonsuccess = "button.btn.btn-xs.btn-success(type='button') [button]\n";
    snippets.jadminibuttonwarning = "button.btn.btn-xs.btn-warning(type='button') [button]\n";
    snippets.jadminibutton = "button.btn.btn-xs.btn-default(type='button') [button]\n";
    snippets.jadsmbuttondanger = "button.btn.btn-sm.btn-danger(type='button') [button]\n";
    snippets.jadsmbuttondefault = "button.btn.btn-sm.btn-default(type='button') [button]\n";
    snippets.jadsmbuttondisabled = "button.btn.btn-sm.btn-default.disabled(type='button') [button]\n";
    snippets.jadsmbuttoninfo = "button.btn.btn-sm.btn-info(type='button') [button]\n";
    snippets.jadsmbuttonprimary = "button.btn.btn-sm.btn-primary(type='button') [button]\n";
    snippets.jadsmbuttonsuccess = "button.btn.btn-sm.btn-success(type='button') [button]\n";
    snippets.jadsmbuttonwarning = "button.btn.btn-sm.btn-warning(type='button') [button]\n";
    snippets.jadsmbutton = "button.btn.btn-sm.btn-default(type='button') [button]\n";

    // Carousel

    snippets.jadcarousel = '#carousel-example-generic.carousel.slide(data-ride=\'carousel\')\n' +
        '  ol.carousel-indicators\n' +
        '    li.active(data-target=\'#carousel-example-generic\', data-slide-to=\'0\')  \n' +
        '    li(data-target=\'#carousel-example-generic\', data-slide-to=\'1\')  \n' +
        '    li(data-target=\'#carousel-example-generic\', data-slide-to=\'2\')  \n' +
        '  .carousel-inner\n' +
        '    .item.active\n' +
        '      img(src=\'[INSERT IMAGE HERE]\', alt=\'First slide\')\n' +
        '    .item\n' +
        '      img(src=\'[INSERT IMAGE HERE]\', alt=\'Second slide\')\n' +
        '    .item\n' +
        '      img(src=\'[INSERT IMAGE HERE]\', alt=\'Third slide\')\n' +
        '  a.left.carousel-control(href=\'#carousel-example-generic\', data-slide=\'prev\')\n' +
        '    span.glyphicon.glyphicon-chevron-left\n' +
        '  a.right.carousel-control(href=\'#carousel-example-generic\', data-slide=\'next\')\n' +
        '    span.glyphicon.glyphicon-chevron-right\n' +
        '\n';

    // ### CDN

    snippets.jadcdn = 'link(rel=\'stylesheet\', media=\'screen\', href=\'//maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap.min.css\')\n' +
        'script(src=\'//ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js\')\n' +
        'script(src=\'//maxcdn.bootstrapcdn.com/bootstrap/3.3.5/js/bootstrap.min.js\')\n';

    snippets.jadcdnjs = 'script(src=\'//ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js\')\n' +
        'script(src=\'//maxcdn.bootstrapcdn.com/bootstrap/3.3.5/js/bootstrap.min.js\')\n';

    snippets.jadcdncss = 'link(rel=\'stylesheet\', media=\'screen\', href=\'//maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap.min.css\')\n';
    snippets.jadcdnmodernizr = 'link(rel=\'stylesheet\', media=\'screen\', href=\'//cdnjs.cloudflare.com/ajax/libs/modernizr/2.8.3/modernizr.min.js\')\n';

    // ### Clearfix

    snippets.jadclearfix = '.clearfix\n';

    // ### Forms

    snippets.jadformhorizontal = 'form.form-horizontal(action=\'\', method=\'POST\', role=\'form\')\n' +
        '.form-group\n' +
        'legend [Form title]\n' +
        '.form-group\n' +
        '.col-sm-10.col-sm-offset-2\n' +
        'button.btn.btn-primary(type=\'submit\') Submit\n';

    snippets.jadforminline = 'form.form-inline(action=\'\', method=\'POST\', role=\'form\')\n' +
        '.form-group\n' +
        'label.sr-only(for=\'\') label\n' +
        'input.form-control(type=\'email\', id=\'\', placeholder=\'Input field\')\n' +
        'button.btn.btn-primary(type=\'submit\') Submit\n';

    snippets.jadformlabel = 'label.col-sm-2(for=\'input-id\') [label]\n';



    snippets.jadform = 'form(action=\'\', method=\'POST\', role=\'form\')\n' +
        'legend Form title\n' +
        '.form-group\n' +
        'label(for=\'\') label\n' +
        'input.form-control(type=\'text\', id=\'\', placeholder=\'Input field\')\n' +
        'button.btn.btn-primary(type=\'submit\') Submit\n';

    snippets.jadinputcheckbox = '.checkbox\n' +
        'label\n' +
        'input(type=\'checkbox\', value=\'\')\n' +
        '|  Checkbox\n';

    snippets.jadinputcolorh = '.form-group\n' +
        'label.col-sm-2.control-label(for=\'input\') :\n' +
        '.col-sm-10\n' +
        'input#input.form-control(type=\'color\', name=\'\', value=\'\', required=\'required\', title=\'\')\n';

    snippets.jadinputcolor = '<input type="color" name="" id="input" class="form-control" value="" required="required" title="">\n';

    snippets.jadinputdateh = '.form-group\n' +
        'label.col-sm-2.control-label(for=\'input\') :\n' +
        '.col-sm-10\n' +
        'input#input.form-control(type=\'date\', name=\'\', value=\'\', required=\'required\', title=\'\')\n';


    snippets.jadinputdate = 'input#input.form-control(type=\'date\', name=\'\', value=\'\', required=\'required\', title=\'\')\n';

    snippets.jadinputemailh = '.form-group\n' +
        'label.col-sm-2.control-label(for=\'input\') :\n' +
        '.col-sm-10\n' +
        'input#input.form-control(type=\'email\', name=\'\', value=\'\', required=\'required\', title=\'\')\n';

    snippets.jadinputemail = 'input#input.form-control(type=\'email\', name=\'\', value=\'\', required=\'required\', title=\'\')\n';
    snippets.jadinputhidden = 'input#input.form-control(type=\'hidden\', name=\'\', value=\'\')\n';

    snippets.jadinputlabel = 'label.col-sm-2(for=\'input-id\')\n';

    snippets.jadinputmonthh = '.form-group\n' +
        '  label.col-sm-2.control-label(for=\'input\') :\n' +
        '  .col-sm-10\n' +
        '    input#input.form-control(type=\'month\', name=\'\', value=\'\', required=\'required\', title=\'\')\n';

    snippets.jadinputmonth = 'input#input.form-control(type=\'month\', name=\'\', value=\'\', required=\'required\', title=\'\')\n';

    snippets.jadinputnumberh = '.form-group\n' +
        '  label.col-sm-2.control-label(for=\'input\') :\n' +
        '  .col-sm-10\n' +
        '    input#input.form-control(type=\'number\', name=\'\', value=\'min=\', min=\'{6\', }=\'\', max=\'\', step=\'\', required=\'required\', title=\'\')\n';

    snippets.jadinputnumber = 'input#input.form-control(type=\'number\', name=\'\', value=\'\', min=\'[MIN]\', max=\'[MAX]\', step=\'\', required=\'required\', title=\'\')\n';

    snippets.jadinputpasswordh = '.form-group\n' +
        '  label.col-sm-2.control-label(for=\'input\') :\n' +
        '  .col-sm-10\n' +
        '    input#input.form-control(type=\'password\', name=\'\', required=\'required\', title=\'\')\n';

    snippets.jadinputpassword = 'input#input.form-control(type=\'password\', name=\'\', required=\'required\', title=\'\')\n';

    snippets.jadinputradio = '.radio\n' +
        '  label\n' +
        '    input#input(type=\'radio\', name=\'\', value=\'\', checked=\'checked\')\n' +
        '    |  Radio Box\n';

    snippets.jadinputrangeh = '.form-group\n' +
        '  label.col-sm-2.control-label(for=\'input\') :\n' +
        '  .col-sm-10\n' +
        '    input#input.form-control(type=\'range\', name=\'\', value=\'min=\', min=\'{6\', }=\'\', max=\'\', step=\'\', required=\'required\', title=\'\')\n';

    snippets.jadinputrange = 'input#input.form-control(type=\'range\', name=\'\', value=\'\', min=\'{5\', }=\'\', max=\'\', step=\'\', required=\'required\', title=\'\')\n';

    snippets.jadinputreseth = '.form-group\n' +
        '  .col-sm-10.col-offset-2\n' +
        '    input.btn.btn-default(type=\'reset\', value=\'Reset\')\n';

    snippets.jadinputreset = 'input.btn.btn-default(type=\'reset\', value=\'Reset\')\n';

    snippets.jadinputsearchh = '.form-group\n' +
        '  label.col-sm-2.control-label(for=\'input\') :\n' +
        '  .col-sm-10\n' +
        '    input#input.form-control(type=\'search\', name=\'\', value=\'\', required=\'required\', title=\'\')\n';

    snippets.jadinputsearch = 'input#input.form-control(type=\'search\', name=\'\', value=\'\', required=\'required\', title=\'\')\n';

    snippets.jadinputselecth = '.form-group\n' +
        '  label.col-sm-2.control-label(for=\'input\') :\n' +
        '  .col-sm-10\n' +
        '    select#input.form-control(name=\'\')\n' +
        '      option(value=\'\') -- Select One --\n';

    snippets.jadinputselect = 'select#input.form-control(name=\'\')\n' +
        '  option(value=\'\') -- Select One --\n';

    snippets.jadinputsubmith = '.form-group\n' +
        '  .col-sm-10.col-offset-2\n' +
        '    button.btn.btn-primary(type=\'submit\') Submit\n';

    snippets.jadinputsubmit = 'button.btn.btn-primary(type=\'submit\') Submit\n';

    snippets.jadinputtelh = '.form-group\n' +
        '  label.col-sm-2.control-label(for=\'input\') :\n' +
        '  .col-sm-10\n' +
        '    input#input.form-control(type=\'tel\', name=\'\', value=\'\', required=\'required\', title=\'\')\n';

    snippets.jadinputtel = 'input#input.form-control(type=\'tel\', name=\'\', value=\'\', required=\'required\', title=\'\')\n';

    snippets.jadinputtexth = '.form-group\n' +
        '  label.col-sm-2.control-label(for=\'input\') :\n' +
        '  .col-sm-10\n' +
        '    input#input.form-control(type=\'text\', name=\'\', value=\'\', required=\'required\', pattern=\'\', title=\'\')\n';

    snippets.jadinputtext = 'input#input.form-control(type=\'text\', name=\'\', value=\'\', required=\'required\', pattern=\'\', title=\'\')\n';

    snippets.jadinputtimeh = '.form-group\n' +
        '  label.col-sm-2.control-label(for=\'input\') :\n' +
        '  .col-sm-10\n' +
        '    input#input.form-control(type=\'time\', name=\'\', value=\'\', required=\'required\', title=\'\')\n';

    snippets.jadinputtime = 'input#input.form-control(type=\'time\', name=\'\', value=\'\', required=\'required\', title=\'\')\n';

    snippets.jadinputurlh = '.form-group\n' +
        '  label.col-sm-2.control-label(for=\'input\') :\n' +
        '  .col-sm-10\n' +
        '    input#input.form-control(type=\'url\', name=\'\', value=\'\', required=\'required\', title=\'\')\n';

    snippets.jadinputurl = 'input#input.form-control(type=\'url\', name=\'\', value=\'\', required=\'required\', title=\'\')\n';

    snippets.jadinputweekh = '.form-group\n' +
        '  label.col-sm-2.control-label(for=\'input\') :\n' +
        '  .col-sm-10\n' +
        '    input#input.form-control(type=\'week\', name=\'\', value=\'\', required=\'required\', title=\'\')\n';

    snippets.jadinputweek = 'input#input.form-control(type=\'week\', name=\'\', value=\'\', required=\'required\', title=\'\')\n';

    snippets.jadselecth = '.form-group\n' +
        '  label.col-sm-2.control-label(for=\'input\') :\n' +
        '  .col-sm-2\n' +
        '    select#input.form-control(name=\'\', required=\'required\')\n' +
        '      option(value=\'\')\n';

    snippets.jadselect = 'select#input.form-control(name=\'\', required=\'required\')\n' +
        '  option(value=\'\')\n';

    snippets.jadtextareah = '.form-group\n' +
        '  label.col-sm-2.control-label(for=\'textarea\') :\n' +
        '  .col-sm-1 \n' +
        '    textarea#textarea.form-control(name=\'\', rows=\'3\', required=\'required\')\n';

    snippets.jadtextarea = 'textarea#input.form-control(name=\'\', rows=\'3\', required=\'required\')\n';

    // ### Grid System

    snippets.jadcol1 = '.col-xs-1.col-sm-1.col-md-1.col-lg-1\n';
    snippets.jadcol10 = '.col-xs-10.col-sm-10.col-md-10.col-lg-10\n';
    snippets.jadcol11 = '.col-xs-11.col-sm-11.col-md-11.col-lg-11\n';
    snippets.jadcol12 = '.col-xs-12.col-sm-12.col-md-12.col-lg-12\n';
    snippets.jadcol2 = '.col-xs-2.col-sm-2.col-md-2.col-lg-2\n';
    snippets.jadcol3 = '.col-xs-3.col-sm-3.col-md-3.col-lg-3\n';
    snippets.jadcol4 = '.col-xs-4.col-sm-4.col-md-4.col-lg-4\n';
    snippets.jadcol5 = '.col-xs-5.col-sm-5.col-md-5.col-lg-5\n';
    snippets.jadcol6 = '.col-xs-6.col-sm-6.col-md-6.col-lg-6\n';
    snippets.jadcol7 = '.col-xs-7.col-sm-7.col-md-7.col-lg-7\n';
    snippets.jadcol8 = '.col-xs-8.col-sm-8.col-md-8.col-lg-8\n';
    snippets.jadcol9 = '.col-xs-9.col-sm-9.col-md-9.col-lg-9\n' +
        '  div\n';
    snippets.jadcontainer = '.container\n';
    snippets.jadrowcol = '.row\n' +
        '.col-xs-.col-sm-.col-md-.col-lg-\n';
    snippets.jadrow = '    .row\n';

    // ### Work with columns

    snippets.jadcol3equal = '.row\n' +
        '  .col-sm-4 .col-sm-4\n' +
        '  .col-sm-4 .col-sm-4\n' +
        '  .col-sm-4 .col-sm-4\n';
    snippets.jadcol3unequal = '.row\n' +
        '  .col-sm-3 .col-md-3\n' +
        '  .col-sm-6 .col-md-6\n' +
        '  .col-sm-3 .col-md-3\n';
    snippets.jadcol2equal = '.row\n' +
        '  .col-sm-4 .col-sm-4\n' +
        '  .col-sm-8 .col-sm-8\n';
    snippets.jadcol2nested = '.row\n' +
        '  .col-sm-8\n' +
        '| .col-sm-8    \n' +
        '.row\n' +
        '.col-sm-6 .col-sm-6\n' +
        '.col-sm-6 .col-sm-6\n' +
        '.col-sm-4 .col-sm-4\n';
    snippets.jadcolmobdesk = '.row\n' +
        '  .col-xs-12.col-md-8 .col-xs-12 .col-md-8\n' +
        '.col-xs-6.col-md-4 .col-xs-6 .col-md-4\n' +
        '.row\n' +
        '.col-xs-6.col-md-4 .col-xs-6 .col-md-4\n' +
        '.col-xs-6.col-md-4 .col-xs-6 .col-md-4\n' +
        '.col-xs-6.col-md-4 .col-xs-6 .col-md-4\n' +
        '.row\n' +
        '.col-xs-6 .col-xs-6\n' +
        '.col-xs-6 .col-xs-6\n';
    snippets.jadcolmobtabdesk = '.row\n' +
        '.col-xs-12.col-sm-6.col-lg-8 .col-xs-12 .col-sm-6 .col-lg-8\n' +
        '.col-xs-6.col-lg-4 .col-xs-6 .col-lg-4\n' +
        '.row\n' +
        '.col-xs-6.col-sm-4 .col-xs-6 .col-sm-4\n' +
        '.col-xs-6.col-sm-4 .col-xs-6 .col-sm-4\n' +
        '  .col-xs-6.col-sm-4 .col-xs-6 .col-sm-4\n';
    snippets.jadclearfloats = '.row\n' +
        '.col-xs-6.col-sm-3\n' +
        '| Column 1\n' +
        'br\n' +
        '|     Resize the browser window to see the effect.\n' +
        '.col-xs-6.col-sm-3 Column 2\n' +
        '// Add clearfix for only the required viewport\n' +
        '.clearfix.visible-xs\n' +
        '.col-xs-6.col-sm-3 Column 3\n' +
        '.col-xs-6.col-sm-3 Column 4\n';
    snippets.jadoffsettingcol = '.row\n' +
        '.col-sm-5.col-md-6 .col-sm-5 .col-md-6\n' +
        '.col-sm-5.col-sm-offset-2.col-md-6.col-md-offset-0\n' +
        '| .col-sm-5 .col-sm-offset-2 .col-md-6 .col-md-offset-0\n';
    snippets.jadpushandpullcol = '.row\n' +
        '.col-sm-4.col-sm-push-8 .col-sm-4 .col-sm-push-8\n' +
        '.col-sm-8.col-sm-pull-4 .col-sm-8 .col-sm-pull-4\n';

    // ### Icons

    snippets.jadiconglyphicon = 'span.glyphicon.NAME(class=\'glyphicon-[ENTER HERE]\', aria-hidden=\'true\')\n';
    snippets.jadicon = 'i.fa(class=\'fa-[name-shape-o-direction]\')\n';
    snippets.jadiconasterisk = 'span.glyphicon.glyphicon-asterisk\n';
    snippets.jadiconplus = 'span.glyphicon.glyphicon-plus\n';
    snippets.jadiconminus = 'span.glyphicon.glyphicon-minus\n';
    snippets.jadiconeuro = 'span.glyphicon.glyphicon-euro\n';
    snippets.jadiconcloud = 'span.glyphicon.glyphicon-cloud\n';
    snippets.jadiconenvelope = '| bs3iconenvelope                \n';
    snippets.jadiconpencil = 'span.glyphicon.glyphicon-pencil\n';
    snippets.jadiconglass = 'span.glyphicon.glyphicon-glass\n';
    snippets.jadiconmusic = 'span.glyphicon.glyphicon-music\n';
    snippets.jadiconsearch = 'span.glyphicon.glyphicon-search\n';
    snippets.jadiconheart = 'span.glyphicon.glyphicon-heart\n';
    snippets.jadiconstar = 'span.glyphicon.glyphicon-star\n';
    snippets.jadiconstarempty = 'span.glyphicon.glyphicon-star-empty\n';
    snippets.jadiconuser = 'span.glyphicon.glyphicon-user\n';
    snippets.jadiconfilm = 'span.glyphicon.glyphicon-film\n';
    snippets.jadiconthlarge = 'span.glyphicon.glyphicon-th-large\n';
    snippets.jadiconth = 'span.glyphicon.glyphicon-th\n';
    snippets.jadiconthlist = 'span.glyphicon.glyphicon-th-list\n';
    snippets.jadiconok = 'span.glyphicon.glyphicon-ok\n';
    snippets.jadiconremove = 'span.glyphicon.glyphicon-remove\n';
    snippets.jadiconzoomin = 'span.glyphicon.glyphicon-zoom-in\n';
    snippets.jadiconzoomout = 'span.glyphicon.glyphicon-zoom-out\n';
    snippets.jadiconoff = 'span.glyphicon.glyphicon-off\n';
    snippets.jadiconsignal = 'span.glyphicon.glyphicon-signal\n';
    snippets.jadiconcog = 'span.glyphicon.glyphicon-cog\n';
    snippets.jadicontrash = 'span.glyphicon.glyphicon-trash\n';
    snippets.jadiconhome = 'span.glyphicon.glyphicon-home\n';
    snippets.jadiconfile = 'span.glyphicon.glyphicon-file\n';
    snippets.jadicontime = 'span.glyphicon.glyphicon-time\n';
    snippets.jadiconroad = 'span.glyphicon.glyphicon-road\n';
    snippets.jadicondownloadalt = 'span.glyphicon.glyphicon-download-alt\n';
    snippets.jadicondownload = 'span.glyphicon.glyphicon-download\n';
    snippets.jadiconupload = 'span.glyphicon.glyphicon-upload\n';
    snippets.jadiconinbox = 'span.glyphicon.glyphicon-inbox\n';
    snippets.jadiconplaycircle = 'span.glyphicon.glyphicon-play-circle\n';
    snippets.jadiconrepeat = 'span.glyphicon.glyphicon-repeat\n';
    snippets.jadiconrefresh = 'span.glyphicon.glyphicon-refresh\n';
    snippets.jadiconlistalt = 'span.glyphicon.glyphicon-list-alt\n';
    snippets.jadiconlock = 'span.glyphicon.glyphicon-lock\n';
    snippets.jadiconflag = 'span.glyphicon.glyphicon-flag\n';
    snippets.jadiconheadphones = 'span.glyphicon.glyphicon-headphones\n';
    snippets.jadiconvolumeoff = 'span.glyphicon.glyphicon-volume-off\n';
    snippets.jadiconvolumedown = 'span.glyphicon.glyphicon-volume-down\n';
    snippets.jadiconvolumeup = 'span.glyphicon.glyphicon-volume-up\n';
    snippets.jadiconqrcode = 'span.glyphicon.glyphicon-qrcode\n';
    snippets.jadiconbarcode = 'span.glyphicon.glyphicon-barcode\n';
    snippets.jadicontag = 'span.glyphicon.glyphicon-tag\n';
    snippets.jadicontags = 'span.glyphicon.glyphicon-tags\n';
    snippets.jadiconbook = 'span.glyphicon.glyphicon-book\n';
    snippets.jadiconbookmark = 'span.glyphicon.glyphicon-bookmark\n';
    snippets.jadiconprint = 'span.glyphicon.glyphicon-print\n';
    snippets.jadiconcamera = 'span.glyphicon.glyphicon-camera\n';
    snippets.jadiconfont = 'span.glyphicon.glyphicon-font\n';
    snippets.jadiconbold = 'span.glyphicon.glyphicon-bold\n';
    snippets.jadiconitalic = 'span.glyphicon.glyphicon-italic\n';
    snippets.jadicontextheight = 'span.glyphicon.glyphicon-text-height\n';
    snippets.jadicontextwidth = 'span.glyphicon.glyphicon-text-width\n';
    snippets.jadiconalignleft = 'span.glyphicon.glyphicon-align-left\n';
    snippets.jadiconaligncenter = 'span.glyphicon.glyphicon-align-center\n';
    snippets.jadiconalignright = 'span.glyphicon.glyphicon-align-right\n';
    snippets.jadiconalignjustify = 'span.glyphicon.glyphicon-align-justify\n';
    snippets.jadiconlist = 'span.glyphicon.glyphicon-list\n';
    snippets.jadiconindentleft = 'span.glyphicon.glyphicon-indent-left\n';
    snippets.jadiconindentright = 'span.glyphicon.glyphicon-indent-right\n';
    snippets.jadiconfacetimevideo = 'span.glyphicon.glyphicon-facetime-video\n';
    snippets.jadiconpicture = 'span.glyphicon.glyphicon-picture\n';
    snippets.jadiconmapmarker = 'span.glyphicon.glyphicon-map-marker\n';
    snippets.jadiconadjust = 'span.glyphicon.glyphicon-adjust\n';
    snippets.jadicontint = 'span.glyphicon.glyphicon-tint\n';
    snippets.jadiconedit = 'span.glyphicon.glyphicon-edit\n';
    snippets.jadiconshare = 'span.glyphicon.glyphicon-share\n';
    snippets.jadiconcheck = 'span.glyphicon.glyphicon-check\n';
    snippets.jadiconmove = 'span.glyphicon.glyphicon-move\n';
    snippets.jadiconstepbackward = 'span.glyphicon.glyphicon-step-backward\n';
    snippets.jadiconfastbackward = 'span.glyphicon.glyphicon-fast-backward\n';
    snippets.jadiconbackward = 'span.glyphicon.glyphicon-backward\n';
    snippets.jadiconplay = 'span.glyphicon.glyphicon-play\n';
    snippets.jadiconpause = 'span.glyphicon.glyphicon-pause\n';
    snippets.jadiconstop = 'span.glyphicon.glyphicon-stop\n';
    snippets.jadiconforward = 'span.glyphicon.glyphicon-forward\n';
    snippets.jadiconfastforward = 'span.glyphicon.glyphicon-fast-forward\n';
    snippets.jadiconstepforward = 'span.glyphicon.glyphicon-step-forward\n';
    snippets.jadiconeject = 'span.glyphicon.glyphicon-eject\n';
    snippets.jadiconchevronleft = 'span.glyphicon.glyphicon-chevron-left\n';
    snippets.jadiconchevronright = 'span.glyphicon.glyphicon-chevron-right\n';
    snippets.jadiconplussign = 'span.glyphicon.glyphicon-plus-sign\n';
    snippets.jadiconminussign = 'span.glyphicon.glyphicon-minus-sign\n';
    snippets.jadiconremovesign = 'span.glyphicon.glyphicon-remove-sign\n';
    snippets.jadiconoksign = 'span.glyphicon.glyphicon-ok-sign\n';
    snippets.jadiconquestionsign = 'span.glyphicon.glyphicon-question-sign\n';
    snippets.jadiconinfosign = 'span.glyphicon.glyphicon-info-sign\n';
    snippets.jadiconscreenshot = 'span.glyphicon.glyphicon-screenshot\n';
    snippets.jadiconremovecircle = 'span.glyphicon.glyphicon-remove-circle\n';
    snippets.jadiconokcircle = 'span.glyphicon.glyphicon-ok-circle\n';
    snippets.jadiconbancircle = 'span.glyphicon.glyphicon-ban-circle\n';
    snippets.jadiconarrowleft = 'span.glyphicon.glyphicon-arrow-left\n';
    snippets.jadiconarrowright = 'span.glyphicon.glyphicon-arrow-right\n';
    snippets.jadiconarrowup = 'span.glyphicon.glyphicon-arrow-up\n';
    snippets.jadiconarrowdown = 'span.glyphicon.glyphicon-arrow-down\n';
    snippets.jadiconsharealt = 'span.glyphicon.glyphicon-share-alt\n';
    snippets.jadiconresizefull = 'span.glyphicon.glyphicon-resize-full\n';
    snippets.jadiconresizesmall = 'span.glyphicon.glyphicon-resize-small\n';
    snippets.jadiconexclamationsign = 'span.glyphicon.glyphicon-exclamation-sign\n';
    snippets.jadicongift = 'span.glyphicon.glyphicon-gift\n';
    snippets.jadiconleaf = 'span.glyphicon.glyphicon-leaf\n';
    snippets.jadiconfire = 'span.glyphicon.glyphicon-fire\n';
    snippets.jadiconeyeopen = 'span.glyphicon.glyphicon-eye-open\n';
    snippets.jadiconeyeclose = 'span.glyphicon.glyphicon-eye-close\n';
    snippets.jadiconwarningsign = 'span.glyphicon.glyphicon-warning-sign\n';
    snippets.jadiconplane = 'span.glyphicon.glyphicon-plane\n';
    snippets.jadiconcalendar = 'span.glyphicon.glyphicon-calendar\n';
    snippets.jadiconrandom = 'span.glyphicon.glyphicon-random\n';
    snippets.jadiconcomment = 'span.glyphicon.glyphicon-comment\n';
    snippets.jadiconmagnet = 'span.glyphicon.glyphicon-magnet\n';
    snippets.jadiconchevronup = 'span.glyphicon.glyphicon-chevron-up\n';
    snippets.jadiconchevrondown = 'span.glyphicon.glyphicon-chevron-down\n';
    snippets.jadiconretweet = 'span.glyphicon.glyphicon-retweet\n';
    snippets.jadiconshoppingcart = 'span.glyphicon.glyphicon-shopping-cart\n';
    snippets.jadiconfolderclose = 'span.glyphicon.glyphicon-folder-close\n';
    snippets.jadiconfolderopen = 'span.glyphicon.glyphicon-folder-open\n';
    snippets.jadiconresizevertical = 'span.glyphicon.glyphicon-resize-vertical\n';
    snippets.jadiconresizehorizontal = 'span.glyphicon.glyphicon-resize-horizontal\n';
    snippets.jadiconhdd = 'span.glyphicon.glyphicon-hdd\n';
    snippets.jadiconbullhorn = 'span.glyphicon.glyphicon-bullhorn\n';
    snippets.jadiconbell = 'span.glyphicon.glyphicon-bell\n';
    snippets.jadiconcertificate = 'span.glyphicon.glyphicon-certificate\n';
    snippets.jadiconthumbsup = '| bs3iconthumbsup                \n';
    snippets.jadiconthumbsdown = 'span.glyphicon.glyphicon-thumbs-down\n';
    snippets.jadiconhandright = 'span.glyphicon.glyphicon-hand-right\n';
    snippets.jadiconhandleft = '| bs3iconhandleft                \n';
    snippets.jadiconhandup = 'span.glyphicon.glyphicon-hand-up\n';
    snippets.jadiconhanddown = 'span.glyphicon.glyphicon-hand-down\n';
    snippets.jadiconcirclearrowright = 'span.glyphicon.glyphicon-circle-arrow-right\n';
    snippets.jadiconcirclearrowleft = 'span.glyphicon.glyphicon-circle-arrow-left\n';
    snippets.jadiconcirclearrowup = 'span.glyphicon.glyphicon-circle-arrow-up\n';
    snippets.jadiconcirclearrowdown = 'span.glyphicon.glyphicon-circle-arrow-down\n';
    snippets.jadiconglobe = 'span.glyphicon.glyphicon-globe\n';
    snippets.jadiconwrench = 'span.glyphicon.glyphicon-wrench\n';
    snippets.jadicontasks = 'span.glyphicon.glyphicon-tasks\n';
    snippets.jadiconfilter = 'span.glyphicon.glyphicon-filter\n';
    snippets.jadiconbriefcase = 'span.glyphicon.glyphicon-briefcase\n';
    snippets.jadiconfullscreen = 'span.glyphicon.glyphicon-fullscreen\n';
    snippets.jadicondashboard = 'span.glyphicon.glyphicon-dashboard\n';
    snippets.jadiconpaperclip = 'span.glyphicon.glyphicon-paperclip\n';
    snippets.jadiconheartempty = 'span.glyphicon.glyphicon-heart-empty\n';
    snippets.jadiconlink = 'span.glyphicon.glyphicon-link\n';
    snippets.jadiconphone = 'span.glyphicon.glyphicon-phone\n';
    snippets.jadiconpushpin = 'span.glyphicon.glyphicon-pushpin\n';
    snippets.jadiconusd = 'span.glyphicon.glyphicon-usd\n';
    snippets.jadicongbp = 'span.glyphicon.glyphicon-gbp\n';
    snippets.jadiconsort = 'span.glyphicon.glyphicon-sort\n';
    snippets.jadiconsortbyalphabet = 'span.glyphicon.glyphicon-sort-by-alphabet\n';
    snippets.jadiconsortbyalphabetalt = 'span.glyphicon.glyphicon-sort-by-alphabet-alt\n';
    snippets.jadiconsortbyorder = 'span.glyphicon.glyphicon-sort-by-order\n';
    snippets.jadiconsortbyorderalt = 'span.glyphicon.glyphicon-sort-by-order-alt\n';
    snippets.jadiconsortbyattributes = 'span.glyphicon.glyphicon-sort-by-attributes\n';
    snippets.jadiconsortbyattributesalt = 'span.glyphicon.glyphicon-sort-by-attributes-alt\n';
    snippets.jadiconunchecked = 'span.glyphicon.glyphicon-unchecked\n';
    snippets.jadiconexpand = 'span.glyphicon.glyphicon-expand\n';
    snippets.jadiconcollapsedown = 'span.glyphicon.glyphicon-collapse-down\n';
    snippets.jadiconcollapseup = 'span.glyphicon.glyphicon-collapse-up\n';
    snippets.jadiconlogin = 'span.glyphicon.glyphicon-log-in\n';
    snippets.jadiconflash = 'span.glyphicon.glyphicon-flash\n';
    snippets.jadiconlogout = 'span.glyphicon.glyphicon-log-out\n';
    snippets.jadiconnewwindow = 'span.glyphicon.glyphicon-new-window\n';
    snippets.jadiconrecord = 'span.glyphicon.glyphicon-record\n';
    snippets.jadiconsave = 'span.glyphicon.glyphicon-save\n';
    snippets.jadiconopen = 'span.glyphicon.glyphicon-open\n';
    snippets.jadiconsaved = 'span.glyphicon.glyphicon-saved\n';
    snippets.jadiconimport = 'span.glyphicon.glyphicon-import\n';
    snippets.jadiconexport = 'span.glyphicon.glyphicon-export\n';
    snippets.jadiconsend = 'span.glyphicon.glyphicon-send\n';
    snippets.jadiconfloppydisk = 'span.glyphicon.glyphicon-floppy-disk\n';
    snippets.jadiconfloppysaved = 'span.glyphicon.glyphicon-floppy-saved\n';
    snippets.jadiconfloppyremove = 'span.glyphicon.glyphicon-floppy-remove\n';
    snippets.jadiconfloppysave = 'span.glyphicon.glyphicon-floppy-save\n';
    snippets.jadiconfloppyopen = 'span.glyphicon.glyphicon-floppy-open\n';
    snippets.jadiconcreditcard = 'span.glyphicon.glyphicon-credit-card\n';
    snippets.jadicontransfer = 'span.glyphicon.glyphicon-transfer\n';
    snippets.jadiconcutlery = 'span.glyphicon.glyphicon-cutlery\n';
    snippets.jadiconheader = 'span.glyphicon.glyphicon-header\n';
    snippets.jadiconcompressed = 'span.glyphicon.glyphicon-compressed\n';
    snippets.jadiconearphone = 'span.glyphicon.glyphicon-earphone\n';
    snippets.jadiconphonealt = 'span.glyphicon.glyphicon-phone-alt\n';
    snippets.jadicontower = 'span.glyphicon.glyphicon-tower\n';
    snippets.jadiconstats = '| bs3iconstats                \n';
    snippets.jadiconsdvideo = 'span.glyphicon.glyphicon-sd-video\n';
    snippets.jadiconhdvideo = 'span.glyphicon.glyphicon-hd-video\n';
    snippets.jadiconsubtitles = 'span.glyphicon.glyphicon-subtitles\n';
    snippets.jadiconsoundstereo = 'span.glyphicon.glyphicon-sound-stereo\n';
    snippets.jadiconsounddolby = 'span.glyphicon.glyphicon-sound-dolby\n';
    snippets.jadiconsound51 = 'span.glyphicon.glyphicon-sound-5-1\n';
    snippets.jadiconsound61 = 'span.glyphicon.glyphicon-sound-6-1\n';
    snippets.jadiconsound71 = 'span.glyphicon.glyphicon-sound-7-1\n';
    snippets.jadiconcopyrightmark = 'span.glyphicon.glyphicon-copyright-mark\n';
    snippets.jadiconregistrationmark = 'span.glyphicon.glyphicon-registration-mark\n';
    snippets.jadiconclouddownload = 'span.glyphicon.glyphicon-cloud-download\n';
    snippets.jadiconcloudupload = 'span.glyphicon.glyphicon-cloud-upload\n';
    snippets.jadicontreeconifer = 'span.glyphicon.glyphicon-tree-conifer\n';
    snippets.jadicontreedeciduous = 'span.glyphicon.glyphicon-tree-deciduous\n';

    snippets.jadiconsample = 'doctype html\n' +
        'head\n' +
        '  link(rel=\'stylesheet\', href=\'http:maxcdn.bootstrapcdn.com/bootstrap/3.3.4/css/bootstrap.min.css\')\n' +
        '  style.\n' +
        '    i.tiny {font-size: 1em;}\n' +
        '    i.small {font-size: 2em;}\n' +
        '    i.medium {font-size: 4em;}\n' +
        '    i.large {font-size: 6em; color: red;}\n' +
        'i.glyphicon.glyphicon-cloud.tiny\n' +
        'i.glyphicon.glyphicon-cloud.small\n' +
        'i.glyphicon.glyphicon-cloud.medium\n' +
        'i.glyphicon.glyphicon-cloud.large\n';

    // ### Images

    snippets.jadimage = 'img.img-responsive(src=\'#\', alt=\'Image\')\n';

    snippets.jadthumbnailcontent = '.col-xs-3.col-sm-3.col-md-3.col-lg-3\n' +
        '  .thumbnail\n' +
        '    img(data-src=\'#\', alt=\'\')\n' +
        '    .caption\n' +
        '      h3 Title\n' +
        '      p\n' +
        '| ...\n' +
        '      p\n' +
        '        a.btn.btn-primary(href=\'#\') Action\n' +
        '        a.btn.btn-default(href=\'#\') Action\n';

    snippets.jadthumbnail = '.col-xs-3.col-sm-3.col-md-3.col-lg-3\n' +
        '  a.thumbnail(href=\'#\')\n' +
        '    img(data-src=\'#\', alt=\'\')\n';

    snippets.jadimagerounded = 'img.img-rounded(src=\'[ENTER IMAGE HERE]\', alt=\'Cinque Terre\', width=\'304\', height=\'236\')\n';
    snippets.jadimagecircle = 'img.img-circle(src=\'[ENTER IMAGE HERE]\', alt=\'Cinque Terre\', width=\'304\', height=\'236\')\n';
    snippets.jadimagethumbnail = 'img.img-thumbnail(src=\'[ENTER IMAGE HERE]\', alt=\'Cinque Terre\', width=\'304\', height=\'236\')\n';
    snippets.jadimageresponsive = 'img.img-responsive(src=\'[ENTER IMAGE HERE]\', alt=\'Chania\')\n';

    snippets.jadresponsiveembed16by9 = '.embed-responsive.embed-responsive-16by9\n' +
        '  iframe.embed-responsive-item(src=\'http://www.youtube.com/embed/[YOUTUBE VIDEO ID]\')\n';

    snippets.jadresponsiveembed4by3 = '.embed-responsive.embed-responsive-16by9\n' +
        '  iframe.embed-responsive-item(src=\'http://www.youtube.com/embed/[YOUTUBE VIDEO ID]\')\n';

    snippets.jadthumbnailgallerysample = 'doctype html\n' +
        'head\n' +
        '  title Bootstrap Image Gallery Sample\n' +
        '  meta(charset=\'utf-8\')\n' +
        '  meta(name=\'viewport\', content=\'width=device-width, initial-scale=1\')\n' +
        '  link(rel=\'stylesheet\', href=\'http://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap.min.css\')\n' +
        '  script(src=\'https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js\')\n' +
        '  script(src=\'http://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/js/bootstrap.min.js\')\n' +
        '.container\n' +
        '  h2 Image Gallery using Thumbnail Class\n' +
        '  .row\n' +
        '    .col-md-4\n' +
        '      a.thumbnail(href=\'[ENTER IMAGE HERE]\')\n' +
        '        p\n' +
        '| Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s\n' +
        '        img(src=\'[ENTER IMAGE HERE]\', alt=\'\', style=\'width:150px;height:150px\')\n' +
        '    .col-md-4\n' +
        '      a.thumbnail(href=\'[ENTER IMAGE HERE]\')\n' +
        '        p\n' +
        '| Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.\n' +
        '        img(src=\'[ENTER IMAGE HERE]\', alt=\'\', style=\'width:150px;height:150px\')\n' +
        '    .col-md-4\n' +
        '      a.thumbnail(href=\'[ENTER IMAGE HERE]\')\n' +
        '        p\n' +
        '| Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using\n' +
        '        img(src=\'[ENTER IMAGE HERE]\', alt=\'\', style=\'width:150px;height:150px\')\n';

    // ### Input Groups

    snippets.jadinputgroupaddontext = '.input-group\n' +
        '  .input-group-addon $\n' +
        '  input#exampleInputAmount.form-control(type=\'text\', placeholder=\'Amount\')\n';

    snippets.jadinputgroupaddon = '.input-group-addon [CHANGE HERE]\n';

    snippets.jadinputgroupbtn = 'span.input-group-btn\n' +
        '  button.btn.btn-default(type=\'button\') Go!\n';

    snippets.jadinputgroup = '.input-group\n' +
        '  input#exampleInputAmount.form-control(type=\'text\', placeholder=\'Search\')\n' +
        '  span.input-group-btn\n' +
        '    button.btn.btn-default(type=\'button\') Go!\n';

    // !!!!!!!!!!! snippets.jadinputgrouptextbtn

    // ### Jumbotron

    snippets.jadjumbotron = '.jumbotron\n' +
        '  .container\n' +
        '    h1 [PUT TITLE HERE]\n' +
        '    p [INSERT CONTENT HERE ...]\n' +
        '    p\n' +
        '      a.btn.btn-primary.btn-lg Learn more\n';

    // ### Labels

    snippets.jadlabeldanger = 'span.label.label-danger [Label]\n';
    snippets.jadlabeldefault = 'span.label.label-default [Label]\n';
    snippets.jadlabelinfo = 'span.label.label-info [Label]\n';
    snippets.jadlabelsuccess = 'span.label.label-success [Label]\n';
    snippets.jadlabelwarning = 'span.label.label-warning [Label]\n';
    snippets.jadlabel = 'span.label.NAME(class=\'label-[ENTER HERE]\') [Label]\n';

    // ### Link Buttons

    snippets.jadblocklinkbuttondanger = 'a.btn.btn-large.btn-block.btn-danger(href=\'#\', role=\'button\') button\n';
    snippets.jadblocklinkbuttondefault = 'a.btn.btn-large.btn-block.btn-default(href=\'#\', role=\'button\') button\n';
    snippets.jadblocklinkbuttondisabled = 'a.btn.btn-large.btn-block.btn-default.disabled(href=\'#\', role=\'button\') button\n';
    snippets.jadblocklinkbuttoninfo = 'a.btn.btn-large.btn-block.btn-info(href=\'#\', role=\'button\') button\n';
    snippets.jadblocklinkbuttonprimary = 'a.btn.btn-large.btn-block.btn-primary(href=\'#\', role=\'button\') button\n';
    snippets.jadblocklinkbuttonsuccess = 'a.btn.btn-large.btn-block.btn-success(href=\'#\', role=\'button\') button\n';
    snippets.jadblocklinkbuttonwarning = 'a.btn.btn-large.btn-block.btn-warning(href=\'#\', role=\'button\') button\n';
    snippets.jadblocklinkbutton = 'a.btn.btn-large.btn-block.btn-default(href=\'#\', role=\'button\') button\n';
    snippets.jadlglinkbuttondanger = 'a.btn.btn-lg.btn-danger(href=\'#\', role=\'button\') button\n';
    snippets.jadlglinkbuttondefault = 'a.btn.btn-lg.btn-default(href=\'#\', role=\'button\') button\n';
    snippets.jadlglinkbuttondisabled = 'a.btn.btn-lg.btn-default.disabled(href=\'#\', role=\'button\') button\n';
    snippets.jadlglinkbuttoninfo = 'a.btn.btn-lg.btn-info(href=\'#\', role=\'button\') button\n';
    snippets.jadlglinkbuttonprimary = 'a.btn.btn-lg.btn-primary(href=\'#\', role=\'button\') button\n';
    snippets.jadlglinkbuttonsuccess = 'a.btn.btn-lg.btn-success(href=\'#\', role=\'button\') button\n';
    snippets.jadlglinkbuttonwarning = 'a.btn.btn-lg.btn-warning(href=\'#\', role=\'button\') button\n';
    snippets.jadlglinkbutton = 'a.btn.btn-lg.btn-default(href=\'#\', role=\'button\') button\n';
    snippets.jadlinkbuttondanger = 'a.btn.btn-danger(href=\'#\', role=\'button\') button\n';
    snippets.jadlinkbuttondefault = 'a.btn.btn-default(href=\'#\', role=\'button\') button\n';
    snippets.jadlinkbuttondisabled = 'a.btn.btn-primary.disabled(href=\'#\', role=\'button\') button\n';
    snippets.jadlinkbuttongroupvertical = '.btn-group-vertical\n' +
        '  a.btn.btn-default(href=\'#\', role=\'button\') Top\n' +
        '  a.btn.btn-default(href=\'#\', role=\'button\') Middle\n' +
        '  a.btn.btn-default(href=\'#\', role=\'button\') Bottom\n';
    snippets.jadlinkbuttongroup = '.btn-group\n' +
        '  a.btn.btn-default(href=\'#\', role=\'button\') Left\n' +
        '  a.btn.btn-default(href=\'#\', role=\'button\') Middle\n' +
        '  a.btn.btn-default(href=\'#\', role=\'button\') Right\n';
    snippets.jadlinkbuttoninfo = 'a.btn.btn-info(href=\'#\', role=\'button\') button\n';
    snippets.jadlinkbuttonprimary = 'a.btn.btn-primary(href=\'#\', role=\'button\') button\n';
    snippets.jadlinkbuttonsuccess = 'a.btn.btn-success(href=\'#\', role=\'button\') button\n';
    snippets.jadlinkbuttonwarning = 'a.btn.btn-warning(href=\'#\', role=\'button\') button\n';
    snippets.jadlinkbutton = 'a.btn.btn-default(href=\'#\', role=\'button\') button\n';
    snippets.jadminilinkbuttondanger = 'a.btn.btn-xs.btn-danger(href=\'#\', role=\'button\') button\n';
    snippets.jadminilinkbuttondefault = 'a.btn.btn-xs.btn-default(href=\'#\', role=\'button\') button\n';
    snippets.jadminilinkbuttondisabled = 'a.btn.btn-xs.btn-default.disabled(href=\'#\', role=\'button\') button\n';
    snippets.jadminilinkbuttoninfo = 'a.btn.btn-xs.btn-info(href=\'#\', role=\'button\') button\n';
    snippets.jadminilinkbuttonprimary = 'button.btn.btn-xs.btn-primary(type=\'button\') button\n';
    snippets.jadminilinkbuttonsuccess = 'a.btn.btn-xs.btn-success(href=\'#\', role=\'button\') button\n';
    snippets.jadminilinkbuttonwarning = 'a.btn.btn-xs.btn-warning(href=\'#\', role=\'button\') button\n';
    snippets.jadminilinkbutton = 'a.btn.btn-xs.btn-default(href=\'#\', role=\'button\') button\n';
    snippets.jadsmlinkbuttondanger = 'button.btn.btn-sm.btn-danger(type=\'button\') button\n';
    snippets.jadsmlinkbuttondefault = 'button.btn.btn-sm.btn-default(type=\'button\') button\n';
    snippets.jadsmlinkbuttondisabled = 'a.btn.btn-sm.btn-default.disabled(href=\'#\', role=\'button\') button\n';
    snippets.jadsmlinkbuttoninfo = 'button.btn.btn-sm.btn-info(type=\'button\') button\n';
    snippets.jadsmlinkbuttonprimary = 'a.btn.btn-sm.btn-primary(href=\'#\', role=\'button\') button\n';
    snippets.jadsmlinkbuttonsuccess = 'a.btn.btn-sm.btn-success(href=\'#\', role=\'button\') button\n';
    snippets.jadsmlinkbuttonwarning = 'a.btn.btn-sm.btn-warning(href=\'#\', role=\'button\') button\n';
    snippets.jadsmlinkbutton = 'a.btn.btn-sm.btn-default(href=\'#\', role=\'button\') button\n';

    // ### List Groups

    snippets.jadlistgroupbadges = 'ul.list-group\n' +
        'li.list-group-item\n' +
        'span.badge 5\n' +
        '    |  Item 1\n' +
        '  li.list-group-item\n' +
        '    span.badge 10\n' +
        '    |     Item 2\n' +
        '  li.list-group-item\n' +
        '    span.badge 15\n' +
        '    |  Item 3\n';

    snippets.jadlistgroupcontent = '.list-group\n' +
        '  a.list-group-item.active(href=\'#\')\n' +
        '    h4.list-group-item-heading List group item heading\n' +
        '    p.list-group-item-text Content goes here\n';

    snippets.jadlistgrouplinked = '.list-group\n' +
        '  a.list-group-item.active(href=\'#\') Item 1\n' +
        '  a.list-group-item(href=\'#\') Item 2\n' +
        '  a.list-group-item(href=\'#\') Item 3\n';

    snippets.jadlistgroup = 'ul.list-group\n' +
        '  li.list-group-item Item 1\n' +
        '  li.list-group-item Item 2\n' +
        '  li.list-group-item Item 3\n';

    // ### Local

    snippets.jadlocal = 'link(rel=\'stylesheet\', media=\'screen\', href=\'bootstrap.min.css\')\n' +
        'script(src=\'jquery.js\')\n' +
        'script(src=\'bootstrap.min.js\')\n';

    snippets.jadlocalcss = 'link(rel=\'stylesheet\', media=\'screen\', href=\'bootstrap.min.css\')\n';

    snippets.jadlocaljs = 'script(src=\'jquery.js\')\n' +
        'script(src=\'bootstrap.min.js\')\n';

    // ### Media

    snippets.jadmediaobject = '.media\n' +
        '  a.pull-left(href=\'#\')\n' +
        '    img.media-object(src=\'#\', alt=\'Image\')\n' +
        '  .media-body\n' +
        '    h4.media-heading Media heading\n' +
        '    p Text goes here...\n';

    // ### Modal

    snippets.jadmodal = '// Local bootstrap CSS & JS\n' +
        'link(rel=\'stylesheet\', media=\'screen\', href=\'bootstrap.min.css\')\n' +
        'script(src=\'jquery.js\')\n' +
        'script(src=\'bootstrap.min.js\')\n';

    snippets.jadmodalstruct = '// Local bootstrap CSS & JS\n' +
        'link(rel=\'stylesheet\', media=\'screen\', href=\'./css/bootstrap.min.css\')\n' +
        'script(src=\'./js/jquery.js\')\n' +
        'script(src=\'./js/bootstrap.min.js\')\n';

    // ### Navigation

    snippets.jadnavbarbasic = '.navbar\n' +
        '  a.navbar-brand(href=\'#\') Title\n' +
        '  ul.nav.navbar-nav\n' +
        '    li.active\n' +
        '      a(href=\'#\') Home\n' +
        '    li\n' +
        '      a(href=\'#\') Link\n';

    snippets.jadnavbarbrand = 'a.navbar-brand(href=\'/\') Title\n';

    snippets.jadnavbarfixedbottom = 'nav.navbar.navbar-default.navbar-fixed-bottom(role=\'navigation\')\n' +
        '  a.navbar-brand(href=\'#\') Title\n' +
        '  ul.nav.navbar-nav\n' +
        '    li.active\n' +
        '      a(href=\'#\') Home\n' +
        '    li\n' +
        '      a(href=\'#\') Link\n';

    snippets.jadnavbarfixedtop = 'nav.navbar.navbar-default.navbar-fixed-top(role=\'navigation\')\n' +
        '  a.navbar-brand(href=\'#\') Title\n' +
        '  ul.nav.navbar-nav\n' +
        '    li.active\n' +
        '      a(href=\'#\') Home\n' +
        '    li\n' +
        '      a(href=\'#\') Link\n';

    snippets.jadnavbarform = 'form.navbar-form.pull-right\n' +
        '  input(type=\'text\', style=\'width: 200px;\')\n' +
        '  button.btn.btn-default(type=\'submit\') Submit\n';

    snippets.jadnavbarinverse = 'nav.navbar.navbar-inverse\n' +
        '  a.navbar-brand(href=\'#\') Title\n' +
        '  ul.nav.navbar-nav\n' +
        '    li.active\n' +
        '      a(href=\'#\') Home\n' +
        '    li\n' +
        '      a(href=\'#\') Link\n';

    snippets.jadnavbarlink = 'p.navbar-text.pull-right\n' +
        '  a.navbar-link(href=\'#\') Links\n';

    snippets.jadnavbarlinks = 'ul.nav.navbar-nav\n' +
        '  li.active\n' +
        '    a(href=\'#\') Home\n' +
        '  li\n' +
        '    a(href=\'#\') Link\n';

    snippets.jadnavbarresponsive = 'nav.navbar.navbar-default(role=\'navigation\')\n' +
        '  // Brand and toggle get grouped for better mobile display\n' +
        '  .navbar-header\n' +
        '    button.navbar-toggle(type=\'button\', data-toggle=\'collapse\', data-target=\'.navbar-ex1-collapse\')\n' +
        '      span.sr-only Toggle navigation\n' +
        '      span.icon-bar\n' +
        '      span.icon-bar\n' +
        '      span.icon-bar\n' +
        '    a.navbar-brand(href=\'#\') Title\n' +
        '  // Collect the nav links, forms, and other content for toggling\n' +
        '  .collapse.navbar-collapse.navbar-ex1-collapse\n' +
        '    ul.nav.navbar-nav\n' +
        '      li.active\n' +
        '        a(href=\'#\') Link\n' +
        '      li\n' +
        '        a(href=\'#\') Link\n' +
        '    form.navbar-form.navbar-left(role=\'search\')\n' +
        '      .form-group\n' +
        '        input.form-control(type=\'text\', placeholder=\'Search\')\n' +
        '      button.btn.btn-default(type=\'submit\') Submit\n' +
        '    ul.nav.navbar-nav.navbar-right\n' +
        '      li\n' +
        '        a(href=\'#\') Link\n' +
        '      li.dropdown\n' +
        '        a.dropdown-toggle(href=\'#\', data-toggle=\'dropdown\')\n' +
        '           Dropdown \n' +
        '          b.caret\n' +
        '        ul.dropdown-menu\n' +
        '          li\n' +
        '            a(href=\'#\') Action\n' +
        '          li\n' +
        '            a(href=\'#\') Another action\n' +
        '          li\n' +
        '            a(href=\'#\') Something else here\n' +
        '          li\n' +
        '            a(href=\'#\') Separated link\n' +
        '  // /.navbar-collapse\n';

    snippets.jadnavbarstatictop = 'nav.navbar.navbar-default.navbar-static-top(role=\'navigation\')\n' +
        '  a.navbar-brand(href=\'#\') Title\n' +
        '  ul.nav.navbar-nav\n' +
        '    li.active\n' +
        '      a(href=\'#\') Home\n' +
        '    li\n' +
        '      a(href=\'#\') Link\n';

    snippets.jadnavbartext = 'p.navbar-text [Navbar text]\n';

    snippets.jadnavbar = 'nav.navbar.navbar-default(role=\'navigation\')\n' +
        '  // Brand and toggle get grouped for better mobile display\n' +
        '  .navbar-header\n' +
        '    button.navbar-toggle(type=\'button\', data-toggle=\'collapse\', data-target=\'.navbar-ex1-collapse\')\n' +
        '      span.sr-only Toggle navigation\n' +
        '      span.icon-bar\n' +
        '      span.icon-bar\n' +
        '      span.icon-bar\n' +
        '    a.navbar-brand(href=\'#\') Title\n' +
        '  // Collect the nav links, forms, and other content for toggling\n' +
        '  .collapse.navbar-collapse.navbar-ex1-collapse\n' +
        '    ul.nav.navbar-nav\n' +
        '      li.active\n' +
        '        a(href=\'#\') Link\n' +
        '      li\n' +
        '        a(href=\'#\') Link\n' +
        '    form.navbar-form.navbar-left(role=\'search\')\n' +
        '      .form-group\n' +
        '        input.form-control(type=\'text\', placeholder=\'Search\')\n' +
        '      button.btn.btn-default(type=\'submit\') Submit\n' +
        '    ul.nav.navbar-nav.navbar-right\n' +
        '      li\n' +
        '        a(href=\'#\') Link\n' +
        '      li.dropdown\n' +
        '        a.dropdown-toggle(href=\'#\', data-toggle=\'dropdown\')\n' +
        '           Dropdown \n' +
        '          b.caret\n' +
        '        ul.dropdown-menu\n' +
        '          li\n' +
        '            a(href=\'#\') Action\n' +
        '          li\n' +
        '            a(href=\'#\') Another action\n' +
        '          li\n' +
        '            a(href=\'#\') Something else here\n' +
        '          li\n' +
        '            a(href=\'#\') Separated link\n' +
        '  // /.navbar-collapse\n';

    // ### Page Header

    snippets.jadpageheader = '.page-header\n' +
        '  h1\n' +
        '   title\n' +
        '    small subtext\n';

    // ### Pagination

    snippets.jadpageraligned = 'ul.pager\n' +
        '  li.previous\n' +
        '    a(href=\'#\') ← Older\n' +
        '  li.next\n' +
        '    a(href=\'#\') Newer →\n';

    snippets.jadpager = 'ul.pager\n' +
        '  li\n' +
        '    a(href=\'#\') Previous\n' +
        '  li\n' +
        '    a(href=\'#\') Next\n';

    snippets.jadpaginationlarge = 'ul.pagination.pagination-lg\n' +
        '  li\n' +
        '    a(href=\'#\') «\n' +
        '  li\n' +
        '    a(href=\'#\') 1\n' +
        '  li\n' +
        '    a(href=\'#\') 2\n' +
        '  li\n' +
        '    a(href=\'#\') 3\n' +
        '  li\n' +
        '    a(href=\'#\') 4\n' +
        '  li\n' +
        '    a(href=\'#\') 5\n' +
        '  li\n' +
        '    a(href=\'#\') »\n';

    snippets.jadpaginationsmall = 'ul.pagination.pagination-sm\n' +
        '  li\n' +
        '    a(href=\'#\') «\n' +
        '  li\n' +
        '    a(href=\'#\') 1\n' +
        '  li\n' +
        '    a(href=\'#\') 2\n' +
        '  li\n' +
        '    a(href=\'#\') 3\n' +
        '  li\n' +
        '    a(href=\'#\') 4\n' +
        '  li\n' +
        '    a(href=\'#\') 5\n' +
        '  li\n' +
        '    a(href=\'#\') »\n';

    snippets.jadpagination = 'ul.pagination\n' +
        '  li\n' +
        '    a(href=\'#\') «\n' +
        '  li\n' +
        '    a(href=\'#\') 1\n' +
        '  li\n' +
        '    a(href=\'#\') 2\n' +
        '  li\n' +
        '    a(href=\'#\') 3\n' +
        '  li\n' +
        '    a(href=\'#\') 4\n' +
        '  li\n' +
        '    a(href=\'#\') 5\n' +
        '  li\n' +
        '    a(href=\'#\') »\n';

    // ### Panels

    snippets.jadpaneldanger = '.panel.panel-danger\n' +
        '  .panel-heading\n' +
        '    h3.panel-title Panel title\n' +
        '  .panel-body\n' +
        '       Panel content\n';

    snippets.jadpanelfooter = '.panel.panel-default\n' +
        '  .panel-body\n' +
        '       Panel content\n' +
        '  .panel-footer\n' +
        '       Panel footer\n';

    snippets.jadpanelheading = '.panel.panel-default\n' +
        '  .panel-heading\n' +
        '    h3.panel-title Panel title\n' +
        '  .panel-body\n' +
        '       Panel content\n';

    snippets.jadpanelinfo = '.panel.panel-info\n' +
        '  .panel-heading\n' +
        '    h3.panel-title Panel title\n' +
        '  .panel-body\n' +
        '       Panel content\n';

    snippets.jadpanelprimary = '.panel.panel-primary\n' +
        '  .panel-heading\n' +
        '    h3.panel-title Panel title\n' +
        '  .panel-body\n' +
        '       Panel content\n';

    snippets.jadpanelsuccess = '.panel.panel-success\n' +
        '  .panel-heading\n' +
        '    h3.panel-title Panel title\n' +
        '  .panel-body\n' +
        '       Panel content\n';

    snippets.jadpaneltable = '.panel.panel-default\n' +
        '  // Default panel contents\n' +
        '  .panel-heading Panel heading\n' +
        '  .panel-body\n' +
        '    p Text goes here...\n' +
        '  // Table\n' +
        '  table.table\n' +
        '    thead\n' +
        '      tr\n' +
        '        th Heading 1\n' +
        '      tr\n' +
        '        th Heading 2\n' +
        '    tbody\n' +
        '      tr\n' +
        '        td Content 1\n' +
        '      tr\n' +
        '        td Content 2\n';

    snippets.jadpanelwarning = '.panel.panel-warning\n' +
        '  .panel-heading\n' +
        '    h3.panel-title Panel title\n' +
        '  .panel-body\n' +
        '       Panel content\n';

    snippets.jadpanel = '.panel.panel-default\n' +
        '  .panel-body\n' +
        '       Basic panel example\n';

    // ### Table

    snippets.jadtable = 'table.table\n' +
        '  thead\n' +
        '    tr\n' +
        '      th [Title]\n' +
        '      th [Title]\n' +
        '      th [Title]\n' +
        '  tbody\n' +
        '    tr\n' +
        '      td [data]\n' +
        '      td [data]\n' +
        '      td [data]\n' +
        '    tr\n' +
        '      td [data]\n' +
        '      td [data]\n' +
        '      td [data]\n';

    snippets.jadtablehover = 'table.table.table-hover\n' +
        '  thead\n' +
        '    tr\n' +
        '      th [Title]\n' +
        '      th [Title]\n' +
        '      th [Title]\n' +
        '  tbody\n' +
        '    tr\n' +
        '      td [data]\n' +
        '      td [data]\n' +
        '      td [data]\n' +
        '    tr\n' +
        '      td [data]\n' +
        '      td [data]\n' +
        '      td [data]\n';

    snippets.jadtablebordered = 'table.table.table-bordered\n' +
        '  thead\n' +
        '    tr\n' +
        '      th [Title]\n' +
        '      th [Title]\n' +
        '      th [Title]\n' +
        '  tbody\n' +
        '    tr\n' +
        '      td [data]\n' +
        '      td [data]\n' +
        '      td [data]\n' +
        '    tr\n' +
        '      td [data]\n' +
        '      td [data]\n' +
        '      td [data]\n';

    snippets.jadtableborderedhover = 'table.table.table-bordered.table-hover\n' +
        '  thead\n' +
        '    tr\n' +
        '      th [Title]\n' +
        '      th [Title]\n' +
        '      th [Title]\n' +
        '  tbody\n' +
        '    tr\n' +
        '      td [data]\n' +
        '      td [data]\n' +
        '      td [data]\n' +
        '    tr\n' +
        '      td [data]\n' +
        '      td [data]\n' +
        '      td [data]\n';

    snippets.jadtablecondensed = 'table.table.table-condensed\n' +
        '  thead\n' +
        '    tr\n' +
        '      th [Title]\n' +
        '      th [Title]\n' +
        '      th [Title]\n' +
        '  tbody\n' +
        '    tr\n' +
        '      td [data]\n' +
        '      td [data]\n' +
        '      td [data]\n' +
        '    tr\n' +
        '      td [data]\n' +
        '      td [data]\n' +
        '      td [data]\n';

    snippets.jadtablecondensedhover = 'table.table.table-condensed.table-hover\n' +
        '  thead\n' +
        '    tr\n' +
        '      th [Title]\n' +
        '      th [Title]\n' +
        '      th [Title]\n' +
        '  tbody\n' +
        '    tr\n' +
        '      td [data]\n' +
        '      td [data]\n' +
        '      td [data]\n' +
        '    tr\n' +
        '      td [data]\n' +
        '      td [data]\n' +
        '      td [data]\n';

    snippets.jadtableresponsive = '.table-responsive\n' +
        '  table.table\n' +
        '    thead\n' +
        '      tr\n' +
        '        th [Title]\n' +
        '        th [Title]\n' +
        '        th [Title]\n' +
        '    tbody\n' +
        '      tr\n' +
        '        td [data]\n' +
        '        td [data]\n' +
        '        td [data]\n' +
        '      tr\n' +
        '        td [data]\n' +
        '        td [data]\n' +
        '        td [data]\n';

    snippets.jadtableresponsivehover = '.table-responsive\n' +
        '  table.table.table-hover\n' +
        '    thead\n' +
        '      tr\n' +
        '        th [Title]\n' +
        '        th [Title]\n' +
        '        th [Title]\n' +
        '    tbody\n' +
        '      tr\n' +
        '        td [data]\n' +
        '        td [data]\n' +
        '        td [data]\n' +
        '      tr\n' +
        '        td [data]\n' +
        '        td [data]\n' +
        '        td [data]\n';

    snippets.jadtablestriped = 'table.table.table-striped\n' +
        '  thead\n ' +
        '    tr\n  ' +
        '      th [Title]\n' +
        '      th [Title]\n' +
        '      th [Title]\n' +
        '  tbody\n' +
        '    tr\n' +
        '      td [data]\n' +
        '      td [data]\n' +
        '      td [data]\n' +
        '    tr\n' +
        '      td [data]\n' +
        '      td [data]\n' +
        '      td [data]\n';

    snippets.jadtablestripedhover = 'table.table.table-striped.table-hover\n' +
        '  thead\n' +
        '    tr\n' +
        '      th [Title]\n' +
        '      th [Title]\n' +
        '      th [Title]\n' +
        '  tbody\n' +
        '    tr\n' +
        '      td [data]\n' +
        '      td [data]\n' +
        '      td [data]\n' +
        '    tr\n' +
        '      td [data]\n' +
        '      td [data]\n' +
        '      td [data]\n';

    snippets.jadtablecontextual = 'table.table\n' +
        '  thead\n' +
        '    tr\n' +
        '      th [Title]\n' +
        '      th [Title]\n' +
        '      th [Title]\n' +
        '  tbody\n' +
        '    tr.active\n' +
        '      td [active data]\n' +
        '      td [active data]\n' +
        '      td [active data]\n' +
        '    tr.success\n' +
        '      td [success data]\n' +
        '      td [success data]\n' +
        '      td [success data]\n' +
        '    tr.info\n' +
        '      td [info data]\n' +
        '      td [info data]\n' +
        '      td [info data]\n' +
        '    tr.warning\n' +
        '      td [warning data]\n' +
        '      td [warning data]\n' +
        '      td [warning data]\n' +
        '    tr.danger\n' +
        '      td [danger data]\n' +
        '      td [danger data]\n' +
        '      td [danger data]\n';

    // ### Tabs

    snippets.jadtabs = 'div(role=\'tabpanel\')\n' +
        '  // Nav tabs\n' +
        '  ul.nav.nav-tabs(role=\'tablist\')\n' +
        '    li.active(role=\'presentation\')\n' +
        '      a(href=\'#home\', aria-controls=\'home\', role=\'tab\', data-toggle=\'tab\') home\n' +
        '    li(role=\'presentation\')\n' +
        '      a(href=\'#tab\', aria-controls=\'tab\', role=\'tab\', data-toggle=\'tab\') tab\n' +
        '  // Tab panes\n' +
        '  .tab-content\n' +
        '    #home.tab-pane.active(role=\'tabpanel\') ...\n' +
        '    #tab.tab-pane(role=\'tabpanel\') ...\n';

    //!!!!!!!!snippets.jadtabhover
    //!!!!!!!!bs3tabhover


    // ### HTML5 Tamplate

    snippets.jadhtml5template = 'doctype html\n' +
        'head\n' +
        '  meta(charset=\'utf-8\')\n' +
        '  meta(http-equiv=\'X-UA-Compatible\', content=\'IE=edge\')\n' +
        '  meta(name=\'viewport\', content=\'width=device-width, initial-scale=1\')\n' +
        '  title Title Page\n' +
        '  // Bootstrap CSS\n' +
        '  link(href=\'//netdna.bootstrapcdn.com/bootstrap/3.2.0/css/bootstrap.min.css\', rel=\'stylesheet\')\n' +
        '  // HTML5 Shim and Respond.js IE8 support of HTML5 elements and media queries\n' +
        '  // WARNING: Respond.js doesn t work if you view the page via file://\n' +
        '  //if lt IE 9\n' +
        '    script(src=\'https://oss.maxcdn.com/libs/html5shiv/3.7.0/html5shiv.js\')\n' +
        '    script(src=\'https://oss.maxcdn.com/libs/respond.js/1.4.2/respond.min.js\')\n' +
        'h1.text-center Hello World\n' +
        '// jQuery\n' +
        'script(src=\'//code.jquery.com/jquery.js\')\n' +
        '// Bootstrap JavaScript\n' +
        'script(src=\'//netdna.bootstrapcdn.com/bootstrap/3.2.0/js/bootstrap.min.js\')\n';

    // ### Wells

    snippets.jadwelllg = '.well.well-lg\n';

    snippets.jadwellsm = '.well.well-sm\n';

    snippets.jadwell = '.well\n';

    module.exports = snippets;
});
