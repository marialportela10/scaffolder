import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsHexColor, IsNotEmpty, IsOptional, IsString, MaxLength, MinLength } from 'class-validator';

export class CreateCategoryDto {
  @ApiProperty({ description: 'Nome da categoria', example: 'Trabalho', minLength: 3, maxLength: 50 })
  @IsString()
  @IsNotEmpty()
  @MinLength(3, { message: 'O nome deve ter no mínimo 3 caracteres.' })
  @MaxLength(50, { message: 'O nome deve ter no máximo 50 caracteres.' })
  name!: string;

  @ApiPropertyOptional({ description: 'Cor em hexadecimal', example: '#FFFFFF', default: '#FFFFFF' })
  @IsOptional()
  
  @IsHexColor({ message: 'Coloque uma cor em hexadecimal válida, ex: #FFFFFF.' })
  color?: string;
}

export class UpdateCategoryDto {
  @ApiPropertyOptional({ description: 'Nome da categoria', minLength: 3, maxLength: 50 })
  @IsOptional()
  @IsString()
  @MinLength(3, { message: 'O nome deve ter no mínimo 3 caracteres.' })
  @MaxLength(50, { message: 'O nome deve ter no máximo 50 caracteres.' })
  name?: string;

  @ApiPropertyOptional({ description: 'Cor em hexadecimal' })
  @IsOptional()
  @IsHexColor({ message: 'Coloque uma cor em hexadecimal válida, ex: #FFFFFF.' })
  color?: string;
}

export class CategoryDto {
  @ApiProperty({ description: 'Identificador único da categoria'})
  id!: string;

  @ApiProperty({ description: 'Nome da categoria'})
  name!: string;

  @ApiProperty({ description: 'Cor (Hexadecimal)'})
  color!: string;

  @ApiProperty({ description: 'Data da criação' })
  createdAt!: string;

  @ApiProperty({ description: 'Data da última atualização' })
  updatedAt!: string;
}