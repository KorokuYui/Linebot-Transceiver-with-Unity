using System;
using UnityEngine;
using System.Collections;
using UnityEngine.Networking;

public class GasGet : MonoBehaviour {
    public InputJson inputJson;
    public float timeOut = 60.0f;
    private float timeElapsed;
    void Start() {
        StartCoroutine(GetText());
    }

    public IEnumerator GetText() {
        UnityWebRequest www = UnityWebRequest.Get("https://script.google.com/macros/s/XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX/exec");
        yield return www.SendWebRequest();

        switch (www.result)
        {
            case UnityWebRequest.Result.InProgress:
                Debug.Log("waiting...");
                break;
            case UnityWebRequest.Result.Success:
                Debug.Log("success");
                break;
        default: throw new ArgumentOutOfRangeException();
        }
        inputJson = JsonUtility.FromJson<InputJson>(www.downloadHandler.text);
    }
}

[System.Serializable]
public class getData
{
    public string userId;
    public string name;
    public string message;
    public string date;
}

[System.Serializable]
public class InputJson
{
    public getData[] events;
}