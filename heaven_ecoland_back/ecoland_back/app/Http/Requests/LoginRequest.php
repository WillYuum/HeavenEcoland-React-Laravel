<?php
use App\User;
namespace App\Http\Requests;
use App\Http\Requests;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Http\Request;
class LoginRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules(Request $request)
    {
        // $this->validate($request, [
        //     'email' => 'required|email',
        //     'password' => 'required|string|min:8',
        //  ]);

        return [
            'email' => 'required|email|',
            'password' => 'required|string|min:8',
        ];
    }
}
