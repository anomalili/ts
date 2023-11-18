@extends(layout)

@section('content')
    <div id="toner-table-container">
        <table class="toner-table">
            <thead>
                <tr>
                    <th>Color</th>
                    <th>Count</th>
                </tr>
            </thead>
            <tbody>
                @foreach($toners as $toner)
                    <tr>
                        <td>{{ $toner->color }}</td>
                        <td>{{ $toner->count }}</td>
                    </tr>
                @endforeach
            </tbody>
        </table>
    </div>
@endsection