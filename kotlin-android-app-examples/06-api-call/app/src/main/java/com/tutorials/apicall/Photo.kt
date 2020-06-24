package com.tutorials.apicall

class Photo {

    var albumId: Int? = null
    var id: Int? = null
    var title: String? = null
    var url: String? = null
    var thumbnailUrl: String? = null

    constructor(albumId: Int?, id: Int?, title: String?, url: String?, thumbnailUrl: String?) {
        this.albumId = albumId
        this.id = id
        this.title = title
        this.url = url
        this.thumbnailUrl = thumbnailUrl
    }

    override fun toString(): String {
        return "Photo(albumId=$albumId, id=$id, title=$title, url=$url, thumbnailUrl=$thumbnailUrl)"
    }
}