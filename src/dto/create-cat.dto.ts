import { ApiModelProperty, ApiUseTags } from '@nestjs/swagger';

@ApiUseTags('cattt')
export class CreateCatDto {
  @ApiModelProperty({
    description: 'name property'
  })
  readonly name: string;
  @ApiModelProperty()
  readonly age: number;
  @ApiModelProperty()
  readonly breed: string;
}
