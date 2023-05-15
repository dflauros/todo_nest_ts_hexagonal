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
  const codeError = codeToReturn.toString().match(/^[4,5]/g);

  if (codeError) {
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
