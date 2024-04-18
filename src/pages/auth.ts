const defaultPostRequest = useCallback(
  async (
    postUrl: string,
    postObject: any,
    setError: Dispatch<SetStateAction<string>>
  ): Promise<any> => {
    if (!jwtToken) {
      navigate("/login"); // todo
    }

    updateLoading(true);
    setError("");

    let response;

    if (jwtToken?.refresh && jwtToken?.access && user?.auth?.uid) {
      try {
        console.log("Data sent:", postObject);
        response = await sendObject(
          postObject,
          jwtToken,
          setJwtToken,
          user?.auth?.uid,
          postUrl
        );
        if (response) {
          return response;
        }
      } catch (e: unknown) {
        if (e instanceof Error) {
          setError(e.message);
          console.error("Error while contact submit occurred:", e.message);
        }
        return null;
      } finally {
        console.log("Application request finished...");
        updateLoading(false);
      }
    }
  },
  [jwtToken, user]
);

export const sendObject = async (
  senderObject: any,
  jwtToken: JwtToken,
  customPostUrl: string
) => {
  // POST THE MESSAGE
  try {
    console.log("Create the post Object with accessToken:", jwtToken.access);
    const response = await postMessageObject(
      jwtToken?.access,
      senderObject,
      customPostUrl,
      {
        timeout: 20000,
      }
    );

    console.log("sendObject res ===", response);
    if (!response) {
      return null;
    } else if (response.status_code == 200) {
      // Success
      console.log("Response", response);
      return response;
    } else if (errorCodes.includes(response.status_code)) {
      // ERROR HANDLING
    }
  } catch (e) {
    console.error('Error in "sendObject":', e);
    return null;
  }
};

export const postMessageObject = async (
  jwtToken: string | undefined,
  senderObject: any,
  postUrl: string,
  options: any
): Promise<any> => {
  const { timeout = 20000 } = options;
  const controller = new AbortController();
  const id = setTimeout(() => controller.abort(), timeout);
  try {
    let response;

    response = await fetch(postUrl, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${jwtToken}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(senderObject),
      ...options,
      signal: controller.signal,
    });
    clearTimeout(id);

    const data = await response?.json();
    console.log("Data postMessageObject:", data);
    return data;
  } catch (e: unknown) {
    clearTimeout(id);
    console.log("Error in postMessageObject:", e);
    return null;
  }
};
