import { ApiModelProperty, ApiUseTags } from '@nestjs/swagger';


export interface Cat {
  name: string;
  age: number;
  breed: string;
}
