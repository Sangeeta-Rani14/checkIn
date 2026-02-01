import Organization from "../model/organization.model.js"
import bcrypt from "bcrypt"

// CREATE ORGANIZATION
export const createOrg = async (req, res) => {
  try {
    const {
      name,
      industry,
      plan,
      address,
      email,
      password
    } = req.body

    // basic validation
    if (!name || !email || !password) {
      return res.status(400).json({
        success: false,
        message: "Name, Email and Password are required",
      })
    }

    // check existing org
    const existingOrg = await Organization.findOne({ email })
    if (existingOrg) {
      return res.status(409).json({
        success: false,
        message: "Organization already exists",
      })
    }

    // hash password
    const hashedPassword = await bcrypt.hash(password, 10)

    const org = await Organization.create({
      name,
      industry,
      plan,
      address,
      email,
      password: hashedPassword,
    })

    res.status(201).json({
      success: true,
      message: "Organization created successfully",
      data: {
        id: org._id,
        orgId: org.orgId,
        name: org.name,
        email: org.email,
        industry: org.industry,
        plan: org.plan,
        address: org.address,
        createdAt: org.createdAt,
      },
    })
  } catch (err) {
    console.error("Error creating organization:", err)
    res.status(500).json({
      success: false,
      message: err.message,
    })
  }
}

// GET ALL ORGANIZATIONS
export const getOrgs = async (req, res) => {
  try {
    const orgs = await Organization.find().select("-Password")

    res.status(200).json({
      success: true,
      count: orgs.length,
      data: orgs,
    })
  } catch (error) {
    console.error("Error fetching organizations:", error)
    res.status(500).json({
      success: false,
      message: error.message,
    })
  }
}
