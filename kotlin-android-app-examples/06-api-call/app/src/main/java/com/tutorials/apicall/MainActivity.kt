package com.tutorials.apicall

import android.os.Bundle
import androidx.appcompat.app.AppCompatActivity
import okhttp3.*
import okio.IOException

class MainActivity : AppCompatActivity() {
    private val client = OkHttpClient()

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)

        run("https://jsonplaceholder.typicode.com/photos")
    }

    fun run(url: String) {
        val request = Request.Builder()
            .url(url)
            .build()

        client.newCall(request).enqueue(object : Callback {
            override fun onFailure(call: Call, e: IOException) {
                println("Error! e : ${e.message} ")
            }

            override fun onResponse(call: Call, response: Response) {
                println("Success...")
                println(response.body?.string())
            }
        })
    }
}