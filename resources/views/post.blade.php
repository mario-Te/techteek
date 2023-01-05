@extends('layouts.app')
@section('content')
<div class="container">
    <div class="row justify-content-center">
        <div class="col-md-8">
            <div class="card">
           
                <div class="card-header bg-dark text-light">
                <h3> {{$post->title}} </h3>
                </div>

                <div class="card-body">
                <p class="text-muted">{{ $text }}</p>
                <div class="row">
                @foreach ($urls as $url)
                    <img src=" {{ $url }} " class="img-thumbnail col-3"> </img>
                @endforeach
                </div>
                </div>
                <div class="card-body">
                <p> Created by:<b class="px-2"> {{ $post->user->name}} </b></p>

                </div>
            </div>
        </div>
    </div>
</div>
@endsection
