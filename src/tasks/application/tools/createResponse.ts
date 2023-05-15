import { HttpCodeStatus, HttpStatus, Response } from 'src/tasks/models';

let initResponse: Response = {
  code: HttpCodeStatus.OK,
  data: {},
  error: false,
};

export const CreateResponse = (
  data: any = initResponse.data,
  codeToReturn: HttpCodeStatus = initResponse.code,
  status: HttpStatus = HttpStatus.OK,
  error: any = initResponse.error,
): Response => {
  const isCodeError = codeToReturn.toString().match(/^[4,5]/g).length > 0;

  if (isCodeError) {
    const err = {
      ...initResponse,
      code: codeToReturn,
      error: `${status}: ${error}`,
    };
    return err;
  }

  return {
    ...initResponse,
    code: codeToReturn,
    data,
  };
};
