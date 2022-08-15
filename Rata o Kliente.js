_AddPermissions("GPS, Sounds, Record")
app.SetOptions("IgnoreErrors");

var pagina = "index.html"

        theme = app.CreateTheme( "Light" );
        theme.AdjustColor( 35, 0, -10 );
        theme.SetBackColor( "#DF58EF" );
        theme.SetBtnTextColor( "black" );
        theme.SetButtonOptions( "custom" );
        theme.SetButtonStyle( "white","white",2,"#999999",0,1,"#ff9000" );
        theme.SetCheckBoxOptions( "dark" );
        theme.SetTextEditOptions( "underline" );
        theme.SetDialogColor( "#ffffffff" );
        theme.SetDialogBtnColor( "#ffeeeeee" );
        theme.SetDialogBtnTxtColor( "#ff666666" );
        theme.SetTitleHeight( 42 );
        theme.SetTitleColor( "#ff888888" ); 
        theme.SetTitleDividerColor( "#ff0099CC" );
        theme.SetTextColor( "#ff666666" );
        app.SetTheme( theme );


function OnStart() {
    app.SetStatusBarColor( "#DF58EF" );
    app.SetNavBarColor( "#D354E2" );
    app.EnableBackKey( false );

    layMain = app.CreateLayout( "Linear", "VCenter" );
    layMain.SetSize( 1, app.IsPortrait()?0.92:0.85 )
    

	var ver = app.GetVersion();
	app.GA( "create", "UA-168116021-1" );
	app.GA( "send", "screenview", 
	    {"appName":"Rata o Kliente","appVersion":ver,"screenName":"main"});


	lay = app.CreateLayout( "linear", "VCenter,FillXY" );	
    
	web = app.CreateWebView( 1.0, 1.0 );
	web.SetOnProgress( web_OnProgess );
	web.LoadUrl( pagina );
	lay.AddChild( web );
	
	layHoriz = app.CreateLayout( "linear", "Horizontal" );	
	
	app.AddLayout( lay );
}

function OnBack() {
    if( web.CanGoBack()) {
        web.Back();
        } else {
            var sino = app.CreateYesNoDialog( "¿Desea salir de Rata o Kliente?" );
            sino.SetButtonText( "Si","No" );
            sino.SetOnTouch(function(result){ if(result=="Yes") app.Exit(); } );
            sino.Show();
            }
            
            function yesNo_OnTouch( result ) {
                if( result=="Yes" ) app.Exit();
                }
            }
function web_OnProgess( progress ) {
	app.Debug( "progress = " + progress );
	if( progress==100 ) app.HideProgress();
}