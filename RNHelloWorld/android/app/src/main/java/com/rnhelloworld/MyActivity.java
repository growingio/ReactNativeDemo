package com.rnhelloworld;

import android.os.Bundle;
import android.support.v7.app.AppCompatActivity;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;
import android.widget.TextView;
import android.widget.Toast;

import com.growingio.android.sdk.collection.GrowingIO;

import org.json.JSONException;
import org.json.JSONObject;

public class MyActivity extends AppCompatActivity implements View.OnClickListener {
    
    private TextView mTextMessage;
    
    private Button track,
            trackWithNumber,
            setEvar,
            setPeopleVariable,
            setPageVariable,
            setUserId,
            clearUserId,
            setVisitor,
            setAPPVariable;
    private int keyNumber = 0;
    
    
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_my);
        
        mTextMessage = (TextView) findViewById(R.id.message);
        
        track = (Button) findViewById(R.id.track);
        track.setOnClickListener(this);
        trackWithNumber = (Button) findViewById(R.id.trackWithNumber);
        trackWithNumber.setOnClickListener(this);
        setEvar = (Button) findViewById(R.id.setEvar);
        setEvar.setOnClickListener(this);
        setPeopleVariable = (Button) findViewById(R.id.setPeopleVariable);
        setPeopleVariable.setOnClickListener(this);
        setPageVariable = (Button) findViewById(R.id.setPageVariable);
        setPageVariable.setOnClickListener(this);
        setUserId = (Button) findViewById(R.id.setUserId);
        setUserId.setOnClickListener(this);
        clearUserId = (Button) findViewById(R.id.clearUserId);
        clearUserId.setOnClickListener(this);
        setVisitor = (Button) findViewById(R.id.setVisitor);
        setVisitor.setOnClickListener(this);
        setAPPVariable = (Button) findViewById(R.id.setAPPVariable);
        setAPPVariable.setOnClickListener(this);
        
        EditText editText = (EditText) findViewById(R.id.et);
        GrowingIO.getInstance().trackEditText(editText);
        
    }
    
    @Override
    public void onClick(View v) {
        switch (v.getId()) {
            case R.id.track:
                
                try {
                    JSONObject jsonObject = new JSONObject();
                    jsonObject.put("skuName_pvar", "女士中跟凉鞋");
                    jsonObject.put("skuCategory_pvar", "鞋靴");
//                    GrowingIO.getInstance().setPageVariable(this, jsonObject);
                    
                    GrowingIO.getInstance().track("orderAmount", 98.77, new JSONObject().put("orderId_var", "#123"));
                } catch (JSONException e) {
                    e.printStackTrace();
                }
                break;
            case R.id.trackWithNumber:
                GrowingIO.getInstance().track("eName", 12.305, getJSONObject());
                break;
            case R.id.setEvar:
//                GrowingIO.getInstance().setEvar(getJSONObject());
                GrowingIO.getInstance().setEvar("enterSource_evar", "首页Banner");
                break;
            case R.id.setPeopleVariable:
//                GrowingIO.getInstance().setPeopleVariable(getJSONObject());
                
                try {
                    JSONObject jsonObject = new JSONObject();
                    jsonObject.put("gender_ppl", "男");
                    jsonObject.put("age_ppl", 25);
                    GrowingIO.getInstance().setPeopleVariable(jsonObject);
                    
                } catch (JSONException e) {
                    e.printStackTrace();
                }
                break;
//            case R.id.page:
//                GrowingIO.getInstance().trackPage("M-Page-Name");
//                break;
            case R.id.setPageVariable:
//                GrowingIO.getInstance().setPageVariable("M-Page-Name", getJSONObject());
                GrowingIO.getInstance().setPageVariable(this, getJSONObject());
                break;
            case R.id.setUserId:
                GrowingIO.getInstance().setUserId("wangying" + System.currentTimeMillis());
                break;
            case R.id.clearUserId:
                GrowingIO.getInstance().clearUserId();
                Toast.makeText(this, "clear lalala", Toast.LENGTH_SHORT).show();
                break;
            
            case R.id.setVisitor:
                try {
                    GrowingIO.getInstance().setVisitor(new JSONObject().put("name", "yingying"));
                } catch (JSONException e) {
                    e.printStackTrace();
                }
                break;
            
            case R.id.setAPPVariable:
                try {
                    GrowingIO.getInstance().setAppVariable(new JSONObject().put("age", "23"));
                } catch (JSONException e) {
                    e.printStackTrace();
                }
                break;
        }
    }
    
    private JSONObject getJSONObject() {
        JSONObject json = new JSONObject();
        try {
            json.put("key" + keyNumber, "value" + keyNumber);
            keyNumber++;
            json.put("key" + keyNumber, "value" + keyNumber);
            keyNumber++;
        } catch (JSONException exp) {
        }
        return json;
    }
}
