package com.rnhelloworld;

import android.os.Bundle;
import android.support.v7.app.AppCompatActivity;
import android.webkit.WebView;

public class HybridTrackActivity extends AppCompatActivity {
    
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_hybrid_track);
        
        WebView webView = findViewById(R.id.hybrid);
        
        webView.loadUrl("file:///android_asset/gio_hybrid.html");
    }
}
