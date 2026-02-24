import{IsString, maxLength, MinLength} from 'class-validator';
export class TestValidator{
    @IsString()
    @MinLength(5)
name:string;
}