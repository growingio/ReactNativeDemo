package com.rnhelloworld;

import android.app.Application;
import android.widget.Toast;

import com.facebook.react.ReactApplication;
import com.facebook.react.ReactNativeHost;
import com.facebook.react.ReactPackage;
import com.facebook.react.shell.MainReactPackage;
import com.facebook.soloader.SoLoader;
import com.growingio.android.plugin.rn.GrowingIOPackage;
import com.growingio.android.sdk.collection.Configuration;
import com.growingio.android.sdk.collection.GrowingIO;
import com.growingio.android.sdk.deeplink.DeeplinkCallback;

import java.util.Arrays;
import java.util.List;
import java.util.Map;

public class MainApplication extends Application implements ReactApplication {
    
    private final ReactNativeHost mReactNativeHost = new ReactNativeHost(this) {
        @Override
        public boolean getUseDeveloperSupport() {
            return BuildConfig.DEBUG;
        }
        
        @Override
        protected List<ReactPackage> getPackages() {
            return Arrays.<ReactPackage>asList(
                    new MainReactPackage(),
                    new GrowingIOPackage(),
                    new MyReactPackage()
            );
        }
        
        @Override
        protected String getJSMainModuleName() {
            return "index";
        }
    };
    
    @Override
    public ReactNativeHost getReactNativeHost() {
        return mReactNativeHost;
    }
    
    @Override
    public void onCreate() {
        super.onCreate();
        SoLoader.init(this, /* native exopackage */ false);
        
        GrowingIO.startWithConfiguration(this, new Configuration()
                .trackAllFragments()
                .setTestMode(true)
                .setDebugMode(true)
                //如果多进程应用，需要打开多进程，才会采集数据
                .setMutiprocess(true)
                //设置支持多进程圈选
                .supportMultiProcessCircle(true)
                .setDeeplinkCallback(new DeeplinkCallback() {
                    @Override
                    public void onReceive(Map<String, String> map, int i) {
                        Toast.makeText(MainApplication.this, "DeepLink自定义参数获取--->" + map.toString(), Toast.LENGTH_SHORT).show();
                    }
                })
                .setChannel("XXX应用商店")
        );
        
    }
}
