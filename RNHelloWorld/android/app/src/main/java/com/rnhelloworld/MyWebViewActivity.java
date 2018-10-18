package com.rnhelloworld;

import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.webkit.WebView;

public class MyWebViewActivity extends AppCompatActivity {
    
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_my_web_view);
    
        WebView webView = findViewById(R.id.webview);
        webView.loadUrl("https://www.baidu.com/");
    }
}
