@extends('layouts.app')
@section('content')
<div class="container">
    <div class="row justify-content-center">
        <div class="col-md-8">
            <div class="card">
            @if(session('status'))
                <div class="alert alert-success">
                {{ session('status') }}
                 </div>
            @endif
                <div class="card-header">Create new post</div>

                <div class="card-body">
                <form action="{{url('/admin/article/create')}}" method="post" class="d-block justify-content-center">
                @csrf
                    <div class="row mb-3">
                     <label for="title" class=" col-form-label  col-2 offset-1 ">Title</label>
                     <input type="text " class="col-6" name="title" />
                     <input type="hidden" id="description" class="col-6" name="text" />
                     </div>
                     <div class="row mb-3">
                         <label for="title" class=" col-form-label col-2 offset-1">Text</label>
                          <div id="editorJS" class="p-3 col-6 border"></div>
                     </div>
                    <div class="row text-center offset-md-3">
                         <button type="button " class="col-3 mx-1 btn btn-success" id="btnSaves"> Add Article </button>
                        <button type="button" class="col-3 mx-1 btn btn-danger"id="btnReset"> Reset </button>
                        
                    </div>
                </form>
                </div>
            </div>
        </div>
    </div>
</div>
@endsection
