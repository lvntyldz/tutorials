package com.tutorials.apiresponsegridview

class Photo {

    var albumId: Int? = null
    var id: Int? = null
    var title: String? = null
    var url: String? = null
    var thumbnailUrl: String? = null

    override fun toString(): String {
        return "Photo(albumId=$albumId, id=$id, title=$title, url=$url, thumbnailUrl=$thumbnailUrl)"
    }
}