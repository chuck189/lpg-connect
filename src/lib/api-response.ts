export function success(
    data: unknown,
    message = "Success"
  ) {
    return Response.json({
      success: true,
      message,
      data,
    });
  }
  
  
  export function error(
    message: string,
    status = 400
  ) {
    return Response.json(
      {
        success:false,
        message,
      },
      {
        status,
      }
    );
  }