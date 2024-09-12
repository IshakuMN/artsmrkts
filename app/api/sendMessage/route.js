import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const { name, email, message, phone_number, language } = await req.json();

    const apiUrl =
      "https://b24-xsgp2b.bitrix24.com/rest/1/woap0lfwspb37q2k/crm.lead.add";
    const queryUrl =
      "https://b24-xsgp2b.bitrix24.com/rest/1/woap0lfwspb37q2k/crm.lead.list";

    // Check if lead with the same email or phone number exists
    const queryResponse = await fetch(queryUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        filter: {
          EMAIL: email,
          PHONE: phone_number,
        },
        select: ["ID"],
      }),
    });

    const queryResult = await queryResponse.json();

    if (queryResult.result.length > 0) {
      return NextResponse.json(
        {
          success: false,
          message: "Lead with the same email or phone number already exists",
        },
        { status: 400 },
      );
    }

    // Add new lead
    const bitrix24Response = await fetch(apiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        fields: {
          TITLE: `Lead from ${name}`,
          NAME: name,
          EMAIL: [{ VALUE: email, VALUE_TYPE: "WORK" }],
          COMMENTS: message || language,
          OPENED: "Y",
          STATUS_ID: "NEW",
          SOURCE_ID: "SELF",
          PHONE: [{ VALUE: phone_number }],
        },
        params: { REGISTER_SONET_EVENT: "Y" },
      }),
    });

    if (bitrix24Response.ok) {
      const result = await bitrix24Response.json();
      return NextResponse.json(
        { success: true, data: result },
        { status: 200 },
      );
    } else {
      const errorData = await bitrix24Response.text();
      console.error("Error response from Bitrix24:", errorData);
      return NextResponse.json(
        {
          success: false,
          message: "Failed to add lead to Bitrix24",
          errorData,
        },
        { status: 500 },
      );
    }
  } catch (error) {
    console.error("An error occurred:", error);
    return NextResponse.json(
      { success: false, message: "An error occurred", error },
      { status: 500 },
    );
  }
}
