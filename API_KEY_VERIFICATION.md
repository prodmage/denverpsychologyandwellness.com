# Google Maps API Key Restriction Verification Guide

## ✅ What You Should Have Set Up

Based on best practices, here's what your restrictions should look like:

### 1. **Application Restrictions**
- **Type:** HTTP referrers (web sites)
- **Referrers to add:**
  ```
  www.denverpsychologyandwellness.com/*
  denverpsychologyandwellness.com/*
  ```
  ⚠️ Make sure you include the `/*` at the end!

### 2. **API Restrictions**
- **Type:** Restrict key
- **Select ONLY:** Maps JavaScript API

---

## 🧪 How to Test Your Restrictions

### **Test 1: Check if your map still works**

1. Visit your contact page: https://www.denverpsychologyandwellness.com/contact
2. The map should load and display correctly
3. If you see a grey box or "For development purposes only" watermark → restrictions are TOO strict

**Expected Result:** ✅ Map loads normally

---

### **Test 2: Check browser console for errors**

1. Visit your contact page
2. Right-click anywhere on the page → "Inspect" or press F12
3. Click the "Console" tab
4. Look for any red errors mentioning "API key" or "Google Maps"

**Expected Result:** ✅ No API key errors

Common error messages if restrictions are wrong:
- ❌ "This API key is not authorized to use this service or API"
- ❌ "RefererNotAllowedMapError"
- ❌ "ApiTargetBlockedMapError"

---

### **Test 3: Verify in Google Cloud Console**

1. Go to: https://console.cloud.google.com/google/maps-apis/credentials
2. Click on your API key name
3. Verify these settings:

**Application restrictions:**
- Should say: "HTTP referrers (web sites)"
- Should list your domains with `/*`

**API restrictions:**
- Should say: "Restrict key"
- Should show ONLY "Maps JavaScript API" in the list

---

## ⏱️ IMPORTANT: Wait Time

**Restrictions can take up to 5 minutes to take effect!**

If your map isn't working immediately after adding restrictions:
1. Wait 5 minutes
2. Clear your browser cache (Ctrl+Shift+Delete)
3. Try again

---

## 🔒 Security Check: Test if Key is Actually Restricted

To verify your key is truly secure, you can try this test:

1. Create a simple HTML file on your desktop with this code:
```html
<!DOCTYPE html>
<html>
<head>
    <title>Test</title>
</head>
<body>
    <div id="map" style="height: 400px;"></div>
    <script>
        function initMap() {
            var map = new google.maps.Map(document.getElementById('map'), {
                center: {lat: 39.6837, lng: -104.9398},
                zoom: 15
            });
        }
    </script>
    <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyDGIu3uZ-LrrGOfaroZduUo_mnEtcGaB-Q&callback=initMap"></script>
</body>
</html>
```

2. Open this file in your browser (it will have a file:// URL)
3. **Expected Result:** ❌ Map should NOT work (you should see errors in console)
4. **Why:** This proves your key is restricted and can't be used from unauthorized domains

---

## ✅ Success Indicators

Your restrictions are working correctly if:
1. ✅ Map loads on www.denverpsychologyandwellness.com/contact
2. ✅ No console errors about API keys
3. ❌ Map does NOT work when tested from a local HTML file or different domain
4. ✅ Google Cloud Console shows your restrictions properly set

---

## 🚨 Troubleshooting

### Problem: Map shows "For development purposes only"
**Solution:** 
- Check billing is enabled in Google Cloud Console
- Verify your API key is correctly added to the project

### Problem: Map is grey/not loading
**Solutions to try:**
1. Wait 5 minutes (restrictions take time)
2. Check referrer format includes `/*`
3. Verify you're using HTTPS (not HTTP)
4. Make sure "Maps JavaScript API" is enabled AND selected in restrictions

### Problem: "RefererNotAllowedMapError"
**Solution:** Your referrer format is wrong. Should be:
- ✅ `denverpsychologyandwellness.com/*`
- ❌ NOT `denverpsychologyandwellness.com`
- ❌ NOT `*.denverpsychologyandwellness.com`

---

## 📊 What Did We Accomplish?

**Before:** Anyone with your API key could use it anywhere, potentially costing you money

**After:** Your API key can ONLY be used on denverpsychologyandwellness.com and ONLY for Maps JavaScript API

This prevents:
- ❌ Unauthorized use on other websites
- ❌ Excessive quota consumption
- ❌ Unexpected Google Maps billing charges
- ❌ Key abuse for other Google services

---

## 📝 Next Steps

1. ✅ Test your contact page map
2. ✅ Check browser console for errors
3. ✅ Verify restrictions in Google Cloud Console
4. ✅ (Optional) Test that key doesn't work elsewhere

Once you confirm everything is working, you're all set! 🎉
