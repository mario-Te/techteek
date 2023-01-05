<?php

namespace App\Http\Controllers;
use App\Models\Posts;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
class PostsController extends Controller
{
    public function store(Request $request)
    {
        $post = new Posts;
        $post->title = $request->title;
        $post->description = $request->text;
        $post->user_id=Auth::id();
        $post->save();
        return back()->with('status', 'new post added!');
    }
    public function show($slug)
    {
        $post = Posts::where('slug', $slug)->first();
        $regex = '/\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|$!:,.;]*[A-Z0-9+&@#\/%=~_|$]/i';
        preg_match_all($regex, $post->description, $matches);
        $all_urls = $matches[0];
        $all_urls = explode('https',$all_urls[0]);
        $all_urls = array_slice($all_urls, 1);
        $all_urls = array_map(function($url) {
            return "https$url";
        }, $all_urls);
        $text= preg_replace($regex, '',$post->description);
        $text = str_replace("<br>", "", $text);
        return view('post',['post'=>$post,'urls'=>$all_urls ,'text' =>$text]);
    }
}
